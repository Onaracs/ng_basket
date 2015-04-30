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
    # link = Link.find_by_url(params["url"])
    # JSON.parse()???
    p "==================="
    
    # paramsRails = JSON.parse(params) if paramsRails.is_a?(String)
    p params
    p params["url"]
    p params["uniqueId"]
    p params["uniqueId"]
    p params["uniqueId"].to_i
    p params["pageInfo"]
    p params["pageInfo"]["image"]
    p params["pageInfo"]["description"]
    p params["pageInfo"]["title"]
    # p params["message"]
    # p params["pageInfo"]["uniqueId"]
    p "==================="
    # if link == nil 
    link = Link.create(url: params["url"],
                      title: params["pageInfo"]["title"],
                      message: params["message"],
                      description: params["pageInfo"]["description"],
                      image: params["pageInfo"]["image"])
    # end

    FolderLink.create(link_id: link.id,
                        folder_id: params["uniqueId"].to_i)
    # redirect_to root_url
    respond_to do |format|
      format.json { render :json => link }
    end
  end

  private

  # def basket_params
  #   params.require(:link).permit(:url, :title, :message, :description, :image)
  # end

end