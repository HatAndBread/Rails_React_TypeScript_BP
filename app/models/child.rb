class Child < ApplicationRecord
  belongs_to :test
  has_many :grand_children
end
