namespace :dri do
  task prefill: :environment do
    nutrients = [
      {id: "1", name: "Water", unit: "g"},
      {id: "2", name: "Energy", unit: "kcal"},
      {id: "3", name: "Protein", unit: "g"},
      {id: "4", name: "Total lipid (fat)", unit: "g"},
      {id: "5", name: "Carbohydrate, by difference", unit: "g"},
      {id: "6", name: "Calcium, Ca", unit: "mg"},
      {id: "7", name: "Iron, Fe", unit: "mg"},
      {id: "8", name: "Magnesium, Mg", unit: "mg"},
      {id: "9", name: "Phosphorus, P", unit: "mg"},
      {id: "10", name: "Potassium, K", unit: "mg"},
      {id: "11", name: "Sodium, Na", unit: "mg"},
      {id: "12", name: "Zinc, Zn", unit: "mg"},
      {id: "13", name: "Vitamin C, total ascorbic acid", unit: "mg"},
      {id: "14", name: "Thiamin", unit: "mg"},
      {id: "15", name: "Riboflavin", unit: "mg"},
      {id: "16", name: "Niacin", unit: "mg"},
      {id: "17", name: "Vitamin B-6", unit: "mg"},
      {id: "18", name: "Folate, DFE", unit: "µg"},
      {id: "19", name: "Vitamin B-12", unit: "µg"},
      {id: "20", name: "Vitamin A, RAE", unit: "µg"},
      {id: "21", name: "Vitamin A, IU", unit: "IU"},
      {id: "22", name: "Fatty acids, total saturated", unit: "g"},
      {id: "23", name: "Fatty acids, total monounsaturated", unit: "g"},
      {id: "24", name: "Fatty acids, total polyunsaturated", unit: "g"},
      {id: "25", name: "Cholesterol", unit: "mg"},
      {id: "26", name: "Vitamin E (alpha-tocopherol", unit: "mg"},
      {id: "27", name: "Vitamin D", unit: "µg"},
      {id: "28", name: "Vitamin K (phylloquinone)", unit: "µg"}
    ]

    nutrient_goals = [
      {user_id: 1, id: 6, value: 1000},
      {user_id: 1, id: 7, value: 8},
      {user_id: 1, id: 8, value: 400},
      {user_id: 1, id: 9, value: 700},
      {user_id: 1, id: 10, value: 4.7},
      {user_id: 1, id: 11, value: 1.5},
      {user_id: 1, id: 12, value: 11},
      {user_id: 1, id: 13, value: 90},
      {user_id: 1, id: 14, value: 1.2},
      {user_id: 1, id: 15, value: 1.3},
      {user_id: 1, id: 16, value: 16},
      {user_id: 1, id: 17, value: 1.3},
      {user_id: 1, id: 18, value: 400},
      {user_id: 1, id: 19, value: 2.4},
      {user_id: 1, id: 20, value: 900},
      {user_id: 1, id: 26, value: 15},
      {user_id: 1, id: 27, value: 15},
      {user_id: 1, id: 28, value: 120}
    ]

    
    nutrients.each {|n| Nutrient.create n }
    nutrient_goals.each { |ng| NutrientGoal.create ng }
  end
end
