class Api::V1::PostingsController < ApplicationController

  def index
    render json: Posting.all
  end

end
