class Api::V1::PostingsController < ApplicationController
protect_from_forgery unless: -> { request.format.json? }
  before_action :authorize_user

def index
  render json: Posting.all.order(created_at: :desc)
end

def show
  render json: Posting.find(params[:id])
end

def new
  new_postings = Posting.new
end

def create
  new_postings = Posting.new(postings_params)
  new_postings.user = current_user
  if new_postings.save
    render json: new_postings
  else
    render json: {error: new_postings.errors.full_messages}
  end
end


private

  def postings_params
    params.permit(:description)
  end

def authorize_user
    if !user_signed_in?
      render json: {message: "You must be signed in to post."}
    end
  end

  def current_user_access
    current_user.id == Posting.find(params[:id]).user_id
  end
end
