class Api::NutrientGoalsController < ApplicationController
	def index
		render json: NutrientGoal.all
	end
end
