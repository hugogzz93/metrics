class Food < ApplicationRecord
	has_many :consumptions, dependent: :destroy
end
