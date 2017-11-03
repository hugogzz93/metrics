class Api::FoodController < ApplicationController
	def new
		Consumption.create(food_id: params[:food], grams: params[:grams])
	end
end
