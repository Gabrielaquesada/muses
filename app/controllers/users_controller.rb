class UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authorize_user

  def show
    User.find(params[:id])
  end

private
  def authorize_user
    if !user_signed_in?
      render json: {message: "You must be signed in to post."}
    end
  end
end
