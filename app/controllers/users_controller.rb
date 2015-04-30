class UsersController < ApplicationController
  respond_to :json, :html, :js

  def users_friends
    render partial: "friends"
  end

  def ng_users_friends

    @friends = current_user.ng_friends_using_app

    respond_to do |format|
      format.json { render :json => @friends }
    end

  end
end