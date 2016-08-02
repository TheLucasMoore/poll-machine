class QuestionsController < ApplicationController
  before_action :find_question, only: [:show, :delete, :update]

  def show
    render json: @question
  end

  def index
    @questions = Question.all
    render json: @questions
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

  def find_question
    @question = Question.find(params[:id])
  end
end
