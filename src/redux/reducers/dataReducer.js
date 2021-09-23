import {
    SET_ARTICLES,
    LIKE_ARTICLE,
    UNLIKE_ARTICLE,
    LOADING_DATA,
    LOADING_UI,
    DELETE_ARTICLE,
    POST_ARTICLE,
    SET_ARTICLE,
    STOP_LOADING_UI,
    SET_EMAILS,
    CLEAR_DATA,SEND_COMMENT
  } from "../types";
  const initialState = {
    articles: {},
    article: {},
    emails:{},
    loading: false,
  };
  export default function dataReducer (state = initialState, action) {
    switch (action.type) {
      case LOADING_DATA:
        return {
          ...state,
          loading: true,
        };
      case SET_ARTICLES:
        return {
          ...state,
          articles: action.payload,
          loading: false,
          article:{}
        };
        case SET_EMAILS:
          return {
            ...state,
         emails:action.payload,
          loading: false,
       
          }
      case SET_ARTICLE:
        return {
          ...state,
          article: action.payload,
        };
      case LIKE_ARTICLE:
      case UNLIKE_ARTICLE:
        let index = state.articles.findIndex(
          (article) => article.articleId === action.payload.articleId
        );
        state.articles[index] = action.payload;
        return {
          ...state,
        };
        
      case DELETE_ARTICLE:
        let inde = state.articles.findIndex(
          (article) => article.articleId === action.payload
        );
        state.articles.splice(inde, 1);
        return {
          ...state,
        };
      case SEND_COMMENT:
        state.article.comments.push(action.payload)
        return {
          ...state
        }
      case POST_ARTICLE:
        return {
          ...state,
          articles: [action.payload, ...state.articles],
        };
      case STOP_LOADING_UI:
        return {
          ...state,
          loading: false,
        };
      case LOADING_UI:
        return {
          ...state,
          loading: true,
        };
      case CLEAR_DATA:
        return {
          ...state,
          article: {},
        };
      default:
        return state;
    }
  }
  