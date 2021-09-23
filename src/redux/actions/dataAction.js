import {
    SET_ARTICLES,
    LOADING_DATA,
    LIKE_ARTICLE,
    UNLIKE_ARTICLE,
    DELETE_ARTICLE,
    CLEAR_ERRORS,
    SET_ERRORS,
    LOADING_UI,
    POST_ARTICLE,
    SET_ARTICLE,
    SET_EMAILS,
    STOP_LOADING_UI,
    CLEAR_DATA,SEND_COMMENT
  } from "../types";
  import axios from "axios";
  export const getArticle = (articleId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .get(
        `https://us-central1-pizzes-2f536.cloudfunctions.net/api/one/${articleId}`
      )
      .then((res) => {
        dispatch({ type: SET_ARTICLE, payload: res.data });
        dispatch({ type: STOP_LOADING_UI });
      })
      .catch((err) => console.log(err));
  };
  export const Comment = (commentData,articleId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .post(
        `https://us-central1-pizzes-2f536.cloudfunctions.net/api/blog/${articleId}/comment`,commentData
      )
      .then((res) => {
        dispatch({ type: SEND_COMMENT, payload: res.data });
        dispatch({ type: STOP_LOADING_UI });
      })
      .catch((err) => console.log(err));
  };
  export const getArticles = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get("https://us-central1-unmasked-f020e.cloudfunctions.net/api/getArticles")
      .then((res) => {
        dispatch({
          type: SET_ARTICLES,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ARTICLES,
          payload: {},
        });
      });
  };
  export const getEmails = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get("https://us-central1-pizzes-2f536.cloudfunctions.net/api/emails")
      .then((res) => {
        dispatch({
          type: SET_EMAILS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_EMAILS,
          payload: {},
        });
      });
  };
  
//   export const likeARTICLE = (blogId) => (dispatch) => {
//     axios
//       .get(
//         `https://us-central1-pizzes-2f536.cloudfunctions.net/api/blog/${blogId}/like`
//       )
//       .then((res) => {
//         dispatch({
//           type: LIKE_ARTICLE,
//           payload: res.data,
//         });
//         console.log(res.data)
//       })
//       .catch((err) => console.log(err));
//   };
//   export const unlikeARTICLE = (blogId) => (dispatch) => {
//     axios
//       .get(`https://us-central1-pizzes-2f536.cloudfunctions.net/api/blog/${blogId}/unlike`)
//       .then((res) => {
//         dispatch({
//           type: UNLIKE_ARTICLE,
//           payload: res.data,
//         });
//         console.log(res.data)
  
//       })
//       .catch((err) => console.log(err));
//   };
  export const deleteArticle = (articleId) => (dispatch) => {
    axios
      .delete(
        `https://us-central1-pizzes-2f536.cloudfunctions.net/api/blog/${articleId}`
      )
      .then(() => {
        dispatch({ type: DELETE_ARTICLE, payload: articleId });
      })
      .catch((err) => console.log(err));
  };
//   export const subscribe =  (info) =>  {
//     console.log(info)
//     return axios
//       .post(
//         "/subscribe",
//         info,
//       ).then((res)=>{
//         console.log(res.data)
//       }).catch((err)=>{
//         console.log(err)
//       })}
  export const postArticle = (newArticle) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .post(
        "https://us-central1-pizzes-2f536.cloudfunctions.net/api/article",
        newArticle
      )
      .then((res) => {
        dispatch({ type: POST_ARTICLE, payload: res.data });
        dispatch({ type: CLEAR_ERRORS });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data,
        });
      });
  };
  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  export const clearData = () => (dispatch) => {
    dispatch({ type: CLEAR_DATA });
  };
  