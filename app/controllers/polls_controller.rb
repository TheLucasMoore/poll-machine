class PollsController < ApplicationController
  def show
    @poll = Poll.find(params[:id])
    render json: @poll
  end
end
