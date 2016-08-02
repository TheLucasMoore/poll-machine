class VotesController < ApplicationController
  before_action :find_vote, only: [:show, :delete, :update]

  def show
    render json: @vote
  end

  def index
    @votes = Vote.all
    render json: @votes
  end

  def new
  end

  def create
  end

  def update
    render json: @vote
  end

  def delete
    render json: @vote
  end

  private

  def find_vote
    @vote = Vote.find(params[:id])
  end
end