import { call, takeLatest, takeEvery, all, put } from 'redux-saga/effects'
import * as actions from './actions'
import FoodDb from './FoodDb'
import { debounce } from './debounce'

function* fetchFoodOptions(action) {
  // delay(250) //throttle api calls
  try {
    const foodDb = new FoodDb()
    const foodName = action.payload.value
    const foodOptions = yield call(foodDb.search.bind(foodDb), foodName)
    yield put(actions.updateFoodOptions(foodOptions))
  } catch(e) {
    console.error(e)
  }
}

function* foodDbSaga() {
  yield takeLatest(actions.updateFoodInput, fetchFoodOptions)
}

export default function* rootSaga() {
  yield all([
    foodDbSaga()
  ])
  
}
