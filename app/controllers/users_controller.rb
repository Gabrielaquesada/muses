class UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authorize_user

  def show
    @user = User.find(params[:id])
  end



  def edit
    @user = User.find(params[:id])
  end

  def update
  @user = User.find(params[:id])
  if @user.update_attributes(user_params)
    redirect_to user_path
  else
    render :action => 'edit'
  end
end



private

private

  def user_params
    params.require(:user).permit(:name, :bio, :location, :longitude, :latitude, :instruments, :influences, :links, :projects, :music_software)
  end
  def authorize_user
    if !user_signed_in?
      render json: {message: "You must be signed in to post."}
    end
  end
end
