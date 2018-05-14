export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY'

export const toggleCategory = id => ({
  type: TOGGLE_CATEGORY,
  id
})

export const requestCategories = () => ({
  type: REQUEST_CATEGORIES
})

export const receiveCategories = (json) => ({
  type: RECEIVE_CATEGORIES,
  resCategories: json.map(child => child),
  receivedAt: Date.now()
})

export const fetchCategories = () => dispatch => {
  dispatch(requestCategories())
  return fetch(`http://localhost:3000/v1/categories`)
    .then(response => response.json())
    .then(json => dispatch(receiveCategories(json)))
}

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

export const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}
