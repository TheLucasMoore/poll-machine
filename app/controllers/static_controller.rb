class StaticController < ApplicationController
  def home
    @greeting = 'hello'
    render json: @greeting
  end
end
