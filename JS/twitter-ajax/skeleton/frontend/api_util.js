const APIUtil = {
  followUser: id => {
    return $.ajax({
      dataType: 'json',
      method: "POST",
      url: `/users/${id}/follow`
    });
  },

  unfollowUser: id => {
    return $.ajax({
      dataType: 'json',
      method: "DELETE",
      url: `/users/${id}/follow`
    });
  },

  searchUsers: (queryVal, cb) => {
    return $.ajax({
      dataType: 'json',
      method: "GET",
      url: '/users/search',
      data: {query: queryVal},
      success: function(response) {
        cb(response);
      }
    });
  },

  createTweet: (data) => {
    return $.ajax({
      dataType: 'json',
      method: 'POST',
      url: '/tweets',
      data
    });
  },

  fetchTweets: (max_created_at) => {
    if (max_created_at == null) {
      return $.ajax({
        dataType: 'json',
        method: "GET",
        url: '/feed'
      });
    } else {
      return $.ajax({
        dataType: 'json',
        method: "GET",
        url: '/feed',
        data: {max_created_at: max_created_at}
      });
    }
  }
};

module.exports = APIUtil;


    // this.toggleState();
