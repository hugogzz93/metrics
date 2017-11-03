class Api::LimbusController < CrudController
	def general
		Limbus.record(params[:weight],
									params[:sleep],
									params[:muscle],
									params[:water],
									params[:fat])
	end
end
