import { ADD_FEATURE, REMOVE_FEATURE, UPDATE_TOTAL } from "../actions/featuresActions"
export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const featureReducer = (state=initialState, action) => {

  switch(action.type) {
    case ADD_FEATURE:
      const falseIfUnique = state.car.features.filter(item => 
        action.payload.id === item.id
      )
      return {
        ...state,
        car: {...state.car,
          features: falseIfUnique[0] ?
            state.car.features:
            state.car.features.concat(action.payload),
          price: falseIfUnique[0] ?
            state.car.price:
            state.car.price + action.payload.price
        }
      }
    case REMOVE_FEATURE:
      const featuresToKeep = state.car.features.filter( feature => 
        {return (feature.id !== action.payload.id)}
      )

    return {
        ...state,
        car: {...state.car, features: featuresToKeep,
          price: state.car.price - action.payload.price
        }
      };
    default:
      return state;
  }
}
//state.filter( todo => !todo.completed)