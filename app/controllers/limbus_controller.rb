class LimbusController < CrudController
  before_action :authenticate_user!
  def index
    @foods = Food.all
  end
end
