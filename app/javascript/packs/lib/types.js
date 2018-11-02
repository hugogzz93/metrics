export type Action = {
  type: string,
  payload: Object
}

export type Food = {
  name: string,
  id?: number,
  grams: number
}

export type Dish = {
  foods: Array<Food>,
  timestamp?: string
}

export type DishFormState = {
  foodInput: Food,
  foods: Array<Food>
}
