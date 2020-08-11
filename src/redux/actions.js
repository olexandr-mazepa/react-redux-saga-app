import {
  CREATE_POST,
  FETCH_POSTS,
  SHOW_LOADER,
  HIDE_LOADER,
  HIDE_ALERT,
  SHOW_ALERT,
  REQUEST_POSTS,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}
export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(()=>{
      dispatch(hideAlert())
    }, 2000)

  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function fetchPosts(post) {
  return {
    type: REQUEST_POSTS
  }
}
