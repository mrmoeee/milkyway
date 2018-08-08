class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid email/username and password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      #might wanna render something different
      render "api/users/show"
    else
      render json: ["You gotta log in!"], status: 404
    end
  end

end
