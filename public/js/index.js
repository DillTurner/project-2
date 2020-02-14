$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();


    //api function call for all strains
    $.get("/api/indica", function(data) {
        var response = stringify(data);
        console.log(response);
      });
      $.get("/api/sativa", function(data) {
        console.log(data);
      });
      $.get("/api/hybrid", function(data) {
        console.log(data);
      });

  });
