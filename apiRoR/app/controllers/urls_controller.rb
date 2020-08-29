class UrlsController < ApplicationController
  
  before_action :set_url, only: [:show, :update, :destroy]

  # GET /urls
  def index
    @urls = Url.all

    render json: @urls
  end

  # GET /urls/1
  def show
    render json: @url
  end

  # POST /urls
  def create
    @url = Url.new(url_params)

    if @url.save
      render json: @url, status: :created, location: @url
    else
      render json: @url.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /urls/1
  def update
   # if @url.update(url_params)
      @url = Url.find_by(short_url: params[:short_url])
      @url.view_count +=1
      @url.save!
      # El redirect_to me da error de CORS al llegar a angularjs
      #redirect_to (@url.original_url)
      # render json: @url
   # else
   #   render json: @url.errors, status: :unprocessable_entity
   # end
  end

  # DELETE /urls/1
  def destroy
    @url.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_url
     # @url = Url.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def url_params
      params.require(:url).permit(:short_url, :original_url, :view_count)
    end
end
