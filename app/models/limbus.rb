class Limbus < ApplicationRecord
	def self.record(weight, sllp, muscle, water, fat, d = DateTime.now)
		Weight.create(value: weight, date: d)
		Sleep.create(value: sllp, date: d)
		MuscleMass.create(value: muscle, date: d)
		WaterPercentage.create(value: water, date: d)
		FatPercentage.create(value: fat, date: d)
	end

	def self.clear_today
		Weight.by_date(DateTime.now, 'day').destroy_all
		Sleep.by_date(DateTime.now, 'day').destroy_all
		MuscleMass.by_date(DateTime.now, 'day').destroy_all
		WaterPercentage.by_date(DateTime.now, 'day').destroy_all
		FatPercentage.by_date(DateTime.now, 'day').destroy_all
	end
end
