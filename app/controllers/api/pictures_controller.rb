class Api::PicturesController < ApplicationController
  def index
    @pictures = Picture.all
    render :index
  end

  def show
    @picture = Picture.find(params[:id])
    render :show
  end

  def update
    @picture = Picture.find(params[:id])
    if @picture.update(picture_params)
      render :show
    else
      render json: @picture.errors.full_messages, status: 422
    end
  end

  def create
    @picture = Picture.new(picture_params)
    @picture.user_id = current_user.id
    if @picture.save!
      render :show
    else
      render json: @picture.errors.full_messages, status: 422
    end
  end

  def destroy
    @picture = Picture.find(params[:id])

    if @picture.destroy
      render :show
    else
      render json: @picture.errors.full_messages, status: 422
    end
  end

  private

  def picture_params
    params.require(:picture).permit(:title, :description, :photo)
  end
end
