class LinksController < ApplicationController
  respond_to :json, :html, :js

  skip_before_filter  :verify_authenticity_token

  def ng_basket_links
    
    #Add in logic here to return a string if no user is signed in!
    folder = Folder.find(params["basketID"])
    links = folder.links
    
    respond_to do |format|
      format.json { render :json => links }
    end
    
  end

  def new_link
    
    @link = Link.new(url: params["url"],
                      title: params["title"],
                      message: params["message"],
                      description: params["description"],
                      image: params["image"],
                      folder_id: params["uniqueId"].to_i)

    if @link.save

      flash.now[:success] = "Request submitted successfully."

    else

      flash.now[:error] = "There was a problem submitting your request."

    end

    p @link
    render :json => @link.as_json

  end

  def destroy

    link = Link.find(params[:id])    
    link.destroy
    
    folder = Folder.find(params[:basketID])
    @links = folder.links

    render :json => @links

  end

  private

  # def basket_params
  #   params.require(:link).permit(:url, :title, :message, :description, :image)
  # end

end