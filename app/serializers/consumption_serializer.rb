class ConsumptionSerializer < ActiveModel::Serializer
  attributes :id, :food_id, :usda_id, :grams, :date
  def usda_id
  	object.food.usda_id
  end

end
