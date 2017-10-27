class Food < ApplicationRecord
	has_many :consumptions

	def self.cr(name, usda_id)
		Food.create name: name, usda_id: usda_id
	end


end
