class Posting < ApplicationRecord
  validates :description, presence: true

  belongs_to :user
  has_many :comments
end
