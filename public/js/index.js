

$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
    //api function calls\
    // these calls need to be changed to only call on certain actions for different pages ie if user wants to search.
    //========================
    $.get("/api/indica", function(response) {
        console.log(response);
      });
      $.get("/api/sativa", function(response) {
        console.log(response);
      });
    $.get("/api/all").then(function(response){               
                  var IndicaTitle = $('#titleIndica');
                  //$("<h3>"+title+"</h3>").appendTo(IndicaTitle);
                  console.log(response);
                  //console.log(indica);
      });
      //====================
  });
