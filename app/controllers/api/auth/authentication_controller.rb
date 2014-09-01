class Api::Auth::AuthenticationController < ApplicationController

  respond_to :json

  # POST /api/auth/signup
  def signup
    user = User.new(user_params)
    if user.save
      render :json => user.as_json, :status => 201
    else
      warden.custom_failure!
      render :json => user.errors, :status => 422
    end
  end

  # POST /api/auth/login
  def login
    user = User.find_for_database_authentication(:email => params[:email])
    return invalid_login_attempt unless user

    if user.valid_password?(params[:password])
      render :json => user.as_json
    else
      return invalid_login_attempt
    end
  end

  # POST /api/auth/send-reset-password-instructions
  def send_reset_password_instructions
    User.send_reset_password_instructions({ :email => params[:email] })
    render :json => { :message => 'We just sent you an email with a link to reset your password' }, :status => 200
  end

  protected

  def user_params
    params.permit(:email, :password)
  end

  def invalid_login_attempt
    warden.custom_failure!
    render :json => { :message => 'Error with your email or password' }, :status => 401
  end

end