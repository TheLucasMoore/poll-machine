class Question < ApplicationRecord
  belongs_to :poll
  has_many :votes

  validates_presence_of :content, :poll_id
end
