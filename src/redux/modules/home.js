
import {get} from '../../utils/request';
import url from '../../utils/url';

/**
 * define the action types on home
 * @type {{FETCH_LIKES_FAIL: string, FETCH_LIKES_SUCCESS: string, FETCH_LIKES_REQUEST: string}}
 */
export const types = {
  FETCH_LIKES_REQUEST: 'HOME/FETCH_LIKES_REQUEST',
  FETCH_LIKES_SUCCESS: 'HOME/FETCH_LIKES_SUCCESS',
  FETCH_LIKES_FAIL: 'HOME/FETCH_LIKES_FAIL'
}

export const actions = {
  loadLikes: () => {
    return (dispatch, getState) => {
      dispatch(fetchLikesRequest());
      return get(url.getProductList(0, 10))
        .then(
          data => {
            // will get data in home
            dispatch(fetchLikesSuccess(data));
          //  will get data in products
          //   dispatch(action)
          },
          error => {
            dispatch(fetchLikesFail(error))
          }
      )
    }
  }
}

const fetchLikesRequest = () => ({
  type: types.FETCH_LIKES_REQUEST
});

const fetchLikesSuccess = (data) => ({
  type: types.FETCH_LIKES_SUCCESS,
  data
});

const fetchLikesFail = (error) => ({
  type: types.FETCH_LIKES_FAIL,
  error
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_LIKES_REQUEST:
  //    todo
    case types.FETCH_LIKES_SUCCESS:
  //    todo
    case types.FETCH_LIKES_FAIL:
  //    todo
    default:
      return state;
  }
}

export default reducer;
