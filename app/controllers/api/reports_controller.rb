class Api::ReportsController < ApplicationController
	def daily_summary
		render json:  {
			consumption: Consumption.by_date(DateTime.now, 'day', :date),
			weights: Weight.by_date(DateTime.now, 'day', :date),
			musclesPercentages: MuscleMass.order(:date).limit(4),
			waterPercentages: WaterPercentage.order(:date).limit(4),
			fatPercentages:  FatPercentage.order(:date).limit(4)
		}
		
	end

end