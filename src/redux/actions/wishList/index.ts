import { START_LOADING, STOP_LOADING } from "../types";

export const addOrRemoveWishItem = (id: number) => (
    dispatch: (arg0: {
      (dispatch: any): Promise<void>;
      (dispatch: any): Promise<void>;
    }) => void,
    getState: () => any,
  ) => {
    const wishList = wishListSelector(getState());
    const itemIfExist = wishList.find(
      (item: {product_id: number}) => item.product_id === id,
    );
  
    if (itemIfExist) {
      dispatch(removeFromWishList(id));
    } else {
      dispatch(addToWishList(id));
    }
  };
  
  export const addToWishList = (id: number) => async (
    dispatch: (arg0: {
      (dispatch: any, getState: any): Promise<void>;
      type?: any;
    }) => void,
  ) => {
    try {
      dispatch({type: START_LOADING});
dispatch(type:ADD_TO_WISHLIST)
      dispatch(fetchUserWishList());
      global.toast.show('Poster added to wishlist');
    } catch (err) {
    } finally {
      dispatch({type: STOP_LOADING});
    }
  };
  
  export const removeFromWishList = (id: number) => async (
    dispatch: (arg0: {
      (dispatch: any, getState: any): Promise<void>;
      type?: any;
    }) => void,
  ) => {
    try {
      dispatch({type: START_LOADING});
     dispatch({type:REMOVE_FROM_WISHLIST})
      dispatch(fetchUserWishList());
      global.toast.show('poster removed from wishlist');
    } catch (err) {
    } finally {
      dispatch({type: STOP_LOADING});
    }
  };