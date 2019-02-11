class Api::V1::CommentsController < ApplicationController
protect_from_forgery unless: -> { request.format.json? }
  before_action :authorize_user

 def index
   render json: Comment.all.order(created_at: :desc)
 end

  def show
    render json: Comment.find(params[:id])
  end

def create
  new_comment = Comment.new(comments_params)
  new_comment.user = current_user
  new_comment.posting_id = params["posting_id"]
  if new_comment.save
    render json: new_comment
  else
    render json: {error: new_comment.errors.full_messages}
  end
end

private

def comments_params
  params.permit(:description)
end

def authorize_user
    if !user_signed_in?
      render json: {message: "You must be signed in to post."}
    end
  end
end
