class JoinBasketsController < ApplicationController
  respond_to :json

  def create

    # Need a current user id, and folder id!
    p "========================================="
    p "========================================="
    p params
    @join_basket = JoinBasket.new(folder_id: params["basketID"].to_i,
                                  user_id: params["userID"].to_i)


    if @join_basket.save
      @user = User.find(params["userID"].to_i)
      render :json => @user
    end
    p "========================================="
    p "========================================="

  end

  def destroy

  end

end