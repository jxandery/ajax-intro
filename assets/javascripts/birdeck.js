$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'http://turing-birdie.herokuapp.com/api/v1/posts.json',
    success: function(posts){
      console.table(posts)
    }
  })
})
