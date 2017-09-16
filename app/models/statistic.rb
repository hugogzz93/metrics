class Statistic < ApplicationRecord
	has_many :measurements
	has_many :goals, class_name: 'StatisticGoal'

	def current_measurement
		measurements.order(:created_at).last.value.to_f
	end

	def current_goal
		goals.order(:created_at).last.value.to_f
	end
end
