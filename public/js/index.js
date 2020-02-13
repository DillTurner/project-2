$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();


    //api function call for all strains
    $.get("/api/all", function(data) {
    var photo = data[95].image;
    var indica= $("#ind");

    var img = $('<img id="pastdynamic_" class= "responsive-img">');
    img.attr("src", photo);
    img.appendTo(indica);
    
        console.log(data);
      });
      $.get("/api/Indica",function(data){
          console.log(data);
      })
  });
