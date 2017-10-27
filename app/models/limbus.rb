class Limbus < ApplicationRecord
	def self.record(weight, sllp, muscle, water, fat)
		d = DateTime.now
		Weight.create(value: weight, date: d)
		Sleep.create(value: sllp, date: d)
		MuscleMass.create(value: muscle, date: d)
		WaterPercentage.create(value: water, date: d)
		FatPercentage.create(value: fat, date: d)
	end
end
