class Sleep < ApplicationRecord
	def self.register(hours)
		Sleep.create(value:hours, date: Datetime.now);
	end
end
