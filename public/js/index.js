$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();


    //api function call for all strains
    $.get("/api/all", function(data) {
        console.log(data);
      });

  });
