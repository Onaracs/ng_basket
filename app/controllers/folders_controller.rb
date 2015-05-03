class FoldersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_folder, only: [:show, :destroy]
  respond_to :json, :html, :js

  def show
    @new_folder = Folder.new
    @links = @folder.links.order('created_at DESC')
  end

  def new
    @new_folder = Folder.new
  end

  def create
    @folder = Folder.new(folder_params)
    @folder.user_id = current_user.id

    if @folder.save
      flash.now[:success] = "Request submitted successfully."
    else
      flash.now[:error] = "There was a problem submitting your request."
    end

    respond_with(@folder)
  end

  def destroy
    @folder = Folder.find(params[:id])
    @folder.destroy

    FolderLink.where(folder_id: @folder.id).delete_all

    respond_with(@folder)
  end

  def users_folders
    user = User.find(current_user.id)
    #Add in logic here to return a string if no user is signed in!
    
    @folders = user.folders.order('created_at ASC')
    render partial: "folders"
    # render :json => { @folders }
  end


  #*** ANGULAR ROUTE ***#
  def ng_users_folders
    user = User.find(current_user.id)
    #Add in logic here to return a string if no user is signed in!
    
    @folders = user.folders.order('created_at ASC')
    
    respond_to do |format|
      format.json { render :json => @folders }
    end
    
  end

  private

  def folder_params
    params.require(:folder).permit(:name)
  end

  def set_folder
    @folder = Folder.find(params[:id])
  end
end