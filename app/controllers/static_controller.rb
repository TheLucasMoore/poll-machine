class StaticController < ActionController::API
  def home
    @greeting = 'hello'
    render json: @greeting
  end
end
