class ConsumptionSerializer < ActiveModel::Serializer
  attributes :id, :food_id, :usda_id, :name, :grams, :date
  def usda_id
  	object.food.usda_id
  end

  def name
  	object.food.name
  end

end
