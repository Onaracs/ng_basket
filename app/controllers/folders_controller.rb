class FoldersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_folder, only: [:show, :destroy]
  respond_to :json, :html, :js

  def create

    @folder = Folder.new(name: params["name"],
                        user_id: current_user.id)

    if @folder.save
      flash.now[:success] = "Request submitted successfully."
    else
      flash.now[:error] = "There was a problem submitting your request."
    end

    render :json => @folder.as_json

  end

  def destroy

    folder = Folder.find(params[:id])    
    folder.destroy

    Link.where(folder_id: folder.id).delete_all

    user = User.find(current_user.id)
    #Add in logic here to return a string if no user is signed in!
    
    @folders = user.folders
    render :json => @folders

  end

  #*** ANGULAR ROUTE ***#
  def ng_users_folders

    user = User.find(current_user.id)
    #Add in logic here to return a string if no user is signed in!
    
    @folders = user.folders
    @joined_folders = user.join_baskets

    p "===================="
    p @joined_folders
    if @joined_folders

      @joined_folders.each do |folder|
        folder = Folder.find(folder.folder_id)
        @folders << folder
      end

    end
    p "===================="
    
    respond_to do |format|
      format.json { render :json => @folders }
    end
    
  end

  def ng_friends_baskets

    user = User.find_by_uid(params["friendID"])

    @folders = user.folders

    render :json => @folders

  end

  private

  def folder_params
    params.require(:folder).permit(:name)
  end

  def set_folder
    @folder = Folder.find(params[:id])
  end
end