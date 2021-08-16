import * as APICategory from '../util/category_api_util';
import { receiveProducts } from './product';
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_ALL_CATEGORY = "RECEIVE_ALL_CATEGORY";

export const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category,
});

export const receiveCategories = (categories) => ({
  type: RECEIVE_ALL_CATEGORY,
  categories,
});


export const fetchCategories = () => (dispatch) =>
  APICategory.fetchCategories().then((categories) =>
    dispatch(receiveCategories(categories))
  );

export const fetchCategory = (categoryId) => (dispatch) =>
  APICategory.fetchCategory(categoryId).then((category) =>{
    dispatch(receiveProducts(category.products))
  }
  );



