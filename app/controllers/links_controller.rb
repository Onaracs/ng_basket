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
    p params
    p pageInfo
    p params["pageInfo"]
    p params["pageInfo"]["title"]
    p params["message"]
    p params["pageInfo"]["description"]
    p params["pageInfo"]["image"]
    p "==================="
    # if link == nil 
    link = Link.create(url: params["url"],
                      title: params["pageInfo"]["title"],
                      message: params["message"],
                      description: params["pageInfo"]["description"],
                      image: params["pageInfo"]["image"])
    # end

    FolderLink.create(link_id: link.id,
                        folder_id: params["uniqueId"])
    redirect_to root_url
  end

end