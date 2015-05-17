class SharedLinksController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  respond_to :json, :js

  def destroy
    @shared_link = SharedLink.find(params[:id])
    @shared_link.destroy
    respond_with(@shared_link)
  end

  def sent_link

    friend = User.find_by_uid(params["uniqueId"])
    shared_basket = SharedBasket.find_by_user_id(friend.id)

    @shared_link = SharedLink.new(sender_id: current_user.id,
                                    shared_basket_id: friend.id,
                                      url: params["url"],
                                      message: params["message"],
                                      title: params["title"],
                                      description: params["description"],
                                      image: params["image"])

    if @shared_link.save

      flash.now[:success] = "Request submitted successfully."

    else

      flash.now[:error] = "There was a problem submitting your request."

    end

    p @shared_link
    render :json => @shared_link.as_json

  end

  #*** ANGULAR ROUTE ***#
  def ng_inbox_links

    @inbox_links = []
    shared_basket = SharedBasket.find_by_user_id(current_user.id)

    # shared_basket.shared_links.order('created_at DESC').each do |link|
    shared_basket.shared_links.each do |link|
      data = {}
      data["title"] = link.title
      data["message"] = link.message
      data["url"] = link.url
      data["sender"] = User.find(link.sender_id).name
      data["date"] = link.created_at.strftime("%a, %b %d")
      data["time"] = link.created_at.strftime("%l:%M%P")
      @inbox_links << data
    end

    respond_to do |format|
      format.json { render :json => @inbox_links }
    end

  end


  private

  # def post_notification(friends_info, shared_basket)
  #   RestClient.post(/{recipient_userid}/notifications?access_token= current_user.oauth_token)


  #   POST /{recipient_userid}/notifications?
  #        access_token= current_user.oauth_token
  #        href= "http://www.mybasketsapp.com/shared_baskets/#{shared_basket}"
  #        template=Test user has sent you a link on Basket!
  # end
end