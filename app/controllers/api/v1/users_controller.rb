class Api::V1::UsersController < ApplicationController

  def show
    render json: { user_id: current_user.id, name: current_user.name  }
  end
end
