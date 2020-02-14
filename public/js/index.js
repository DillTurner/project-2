

$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
var info= [];
var title ="";
    //api function call for all strains
    $.get("/api/all").then(function(response){
              $.get("https://strainapi.evanbusse.com/UyDNtOb/strains/search/race/Indica", function(indica) {
                    
                   title = indica[0].name;
                  var infor = response[title];
                  var IndicaTitle = $('#titleIndica');
                  $("<h3>"+title+"</h3>").appendTo(IndicaTitle);
                  console.log(infor);
                  console.log(indica);
                });

      });
      $.get("/api/hybrid", function(data) {
        console.log(data);
      });

  });
