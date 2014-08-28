class RegistrationsController < ApplicationController

  respond_to :json

  def create
    user = User.new(user_params)
    if user.save
      render :json => user.as_json(:authentication_token => user.authentication_token), :status => 201
    else
      warden.custom_failure!
      render :json => user.errors, :status => 422
    end
  end

  private
  def user_params
    params.permit(:email, :password)
  end
end