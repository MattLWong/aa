const APIUtil = {

  followUser: id => APIUtil.changeFollowStatus(id, 'POST'),

  unfollowUser: id => APIUtil.changeFollowStatus(id, "DELETE"),

  changeFollowStatus:  (id, method) => (
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'json',
      method
    })
  ),

  searchUsers: query => (
    $.ajax({
      url: '/users/search',
      method: "get",
      data: { query },
      dataType: 'json'
    })
  ),

  createTweet: tweet => (
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: { tweet },
      dataType: 'json'
    })
  ),

  fetchTweets: ( max ) => (
    $.ajax({
      url: '/feed',
      method: 'GET',
      data: { max_created_at: max },
      dataType: 'json'
    })
  )
}

module.exports = APIUtil;
