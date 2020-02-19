$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();



$.get("/api/hybrid", function(response) {
    console.log(response);
  });

});