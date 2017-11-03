class LimbusController < CrudController
	def index
		@foods = Food.all
	end
end
