class PollsController < ApplicationController
  before_action :find_poll, only: [:show, :delete, :update]

  def show
    render json: @poll
  end

  def index
    @polls = Poll.all
    render json: @polls
  end

  def new
  end

  def create
  end

  def update
    render json: @poll
  end

  def delete
    render json: @poll
  end

  private

  def find_poll
    @poll = Poll.find(params[:id])
  end
end
