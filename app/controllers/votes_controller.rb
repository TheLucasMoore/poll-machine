class VotesController < ApplicationController
  def create
  end

  private

  def vote_params
    require(:vote).permit(:user_id, :question)
  end
end
