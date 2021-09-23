import {
    SET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    LIKE_ARTICLE,
    UNLIKE_ARTICLE,
  } from "../types";
  
  const initialState = {
    authenticated: false,
    credentials: {},
    loading: false,
    likes: [],
  };
  export default function userReducer (state = initialState, action) {
    switch (action.type) {
      case SET_AUTHENTICATED:
        return {
          ...state,
          authenticated: true,
        };
      case SET_UNAUTHENTICATED:
        return initialState;
      case SET_USER:
        return {
          authenticated: true,
          loading: false,
          ...action.payload,
        };
  
      case LOADING_USER:
        return {
          ...state,
          loading: true,
        };
      case LIKE_ARTICLE:
        return {
          ...state,
          likes: [
            ...state.likes,
            {
              name: state.credentials.name,
              articleId: action.payload.articleId,
            },
          ],
        };
      case UNLIKE_ARTICLE:
        return {
          ...state,
          likes: state.likes.filter(
            (like) => like.articleId !== action.payload.articleId
          ),
        };
      default:
        return state;
    }
  }
  