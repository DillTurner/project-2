$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();


    //api function call for all strains
    $.get("https://strainapi.evanbusse.com/UyDNtOb/strains/search/race/Indica", function(data) {
        
      var title = data[0].name
      title.appendTo($('#titleIndica'));

        console.log(data);
      });
      $.get("/api/all", function(data) {
        console.log(data);
      });
      $.get("/api/hybrid", function(data) {
        console.log(data);
      });

  });
