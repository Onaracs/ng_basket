class UsersController < ApplicationController
  respond_to :json, :html, :js

  def ng_users_friends

    @friends = current_user.ng_friends_using_app

    respond_to do |format|
      format.json { render :json => @friends }
    end

  end


  def ng_current_user

    @current_user = User.find(session[:user_id])

    # respond_to do |format|
    #   format.json { render :json => {:user => @current_user} }
    # end

    render :json => @current_user
    
  end

end