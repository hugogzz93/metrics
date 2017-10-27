class Api::ReportsController < ApplicationController
	def daily_summary
		render json:  {
			consumption: 			 ActiveModel::Serializer::CollectionSerializer
														.new( Consumption.by_date( DateTime.now,
																											 'day',
																											 :date),
														each_serializer: ConsumptionSerializer),
			weights: 						Weight.order(date: :desc).limit(4),
			musclesPercentages: MuscleMass.order(date: :desc).limit(4),
			waterPercentages: 	WaterPercentage.order(date: :desc).limit(4),
			fatPercentages:  		FatPercentage.order(date: :desc).limit(4),
			sleepTime: 					Sleep.order(date: :desc).limit(4),
			nutrientGoals: 			NutrientGoal.all
		}
		
	end

end