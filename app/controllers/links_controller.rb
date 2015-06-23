class LinksController < ApplicationController
  respond_to :json, :html, :js

  skip_before_filter  :verify_authenticity_token

  def new_link

    @link = Link.new(url: params["url"],
                      title: params["title"],
                      message: params["message"],
                      description: params["description"],
                      image: params["image"],
                      folder_id: params["uniqueId"].to_i)

    if @link.save
      folder = Folder.find(params["uniqueId"].to_i)
      
      render :json => folder
    end

  end

  def last_saved_links

    user = User.find(current_user.id)
    links = user.links.limit(10)

    @returned_links = []

    links.each do |link|
      link_info = {}
      link_info[:link] = link
      link_info[:basket] = Folder.find(folder_id)

      @returned_links << link_info
    end

    p "=============================="
    p @returned_links
    p "=============================="

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