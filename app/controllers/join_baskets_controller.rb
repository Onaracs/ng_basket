class JoinBasketsController < ApplicationController
  respond_to :json

  def create

    @join_basket = JoinBasket.new(folder_id: params["basketID"].to_i,
                                  user_id: params["userID"].to_i)


    if @join_basket.save
      @user = User.find(params["userID"].to_i)
      render :json => @user
    end

  end

  def destroy

    join_basket = JoinBasket.where(user_id: params["userID"],
                                  folder_id: params["basketID"])
    join_basket[0].destroy
    
    @folder = Folder.find(params["basketID"])
    render :json => @folder

  end

end