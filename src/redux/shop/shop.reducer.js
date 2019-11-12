import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections : null,
  isFetching: false,
  errorMessage : null
}

const shopReducer = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections : action.payload.collectionsMap,
        isFetching: false,
      }
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.errorMessage
      }
    default:
      return state;
  }
}

export default shopReducer;