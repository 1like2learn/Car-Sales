export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"
export const UPDATE_TOTAL = "UPDATE_TOTAL"

export const addFeature = (newFeature) => {
  return { type: ADD_FEATURE, payload: newFeature}
}
export const removeFeature = (addedFeature) => {
  return { type: REMOVE_FEATURE, payload: addedFeature}
}
export const updateTotal = (featureTotal) => {
  return { type: UPDATE_TOTAL, payload: featureTotal}
}
