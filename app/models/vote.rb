class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :question

  validates :user_id, uniqueness: { scope: :question_id,
    message: "Only One Vote Per User!" }
end
