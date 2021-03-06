class Lesson < ApplicationRecord
  has_one :study_module, as: :contentable, dependent: :destroy
  has_rich_text :content
  validates :study_module, presence: true
  # include ActionText::Attachable
  accepts_nested_attributes_for :study_module

  validates :content, presence: true
end
