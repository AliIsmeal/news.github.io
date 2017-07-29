var scrollbar = [];
$(document).ready(function () {

    function getData(url, id1) {
        $.get(url, function (data) {

            var news = "";            
                var source = data.source.toUpperCase();
                for (var i = 0; i < 8; i++) {

                        
                        news += '<div class="main">'; ' "alt="Card image cap">'
                        news += "<a href='" + data.articles[i].url + "'>";
                        news += '<img class="card-img-top" src=' + "'" + data.articles[i].urlToImage + "'" + "alt=" + "image" + "-" + data.source + ">";

                        news += ' <div class="card-block">';
                        news += "<p id='SourceText' class='Source'>" + source + "</p>";

                        news += '  <span class="card-title">' + data.articles[i].title + '</span> <br><br>';
                        

                        var sub = data.articles[i].description;
                        if (sub.length > 150) {
                            var res = sub.slice(0, 150);

                        }
                        else if (sub.length < 150) {

                            var res = sub + "<br><br";
                        }

                        news += '<p class="card-text">' + res+ '</p> ';
                        news += '<span  style="margin-left:10px">' + "<a class='hidden-md-down'  href='" + data.articles[i].url + "'><br><span style='color:blue'>More details...</span></a>" + '</span>';
                        news += "</a>";

                        news += "<span class='Source'>" + "<p> Published At:" + data.articles[i].publishedAt + "</span>" + "</p>";

                        news += '</div>';
                        news += '</div>';
                        }
                    

                   
                

                scrollbar += '<span class="scroll">' + source + ":" + data.articles[i].title + ".</span>";
                marquee();
            

                function marquee() {
                    var myscroll = "";
                    for (var i = 0; i < scrollbar.length; i++) {
                        myscroll += scrollbar[i];

                    }
                    $('#scroll').html(scrollbar);
                    $('#scrollSmallDevices').html(scrollbar);

                }

                $(id1).html(news);

                });
        }

    document.getElementById('sport').onclick = function () {
        for (var i = 0; i < sportUrl.length; i++) {
            getData(sportUrl[i].url, sportUrl[i].id);
        }
        document.getElementById("headline").innerHTML = "SPORT NEWS";
        
        document.getElementById("worldNewsSmall").innerHTML = "SPORT NEWS";
        document.getElementById("jumbotron").style.backgroundImage = " url('img/person-sport-bike.jpg')";
        document.getElementById("jumbotron").style.color = "white";
    }




    document.getElementById('business').onclick = function () {
        for (var i = 0; i < BusinessUrl.length; i++) {
            getData(BusinessUrl[i].url, BusinessUrl[i].id);
        }
        document.getElementById("headline").innerHTML = "BUSINESS NEWS";
        document.getElementById("worldNewsSmall").innerHTML = "BUSINESS NEWS";
        document.getElementById("jumbotron").style.backgroundImage = " url('img/Business.jpg')";
        document.getElementById("scroll").style.color = "white";

    }




    document.getElementById('science').onclick = function () {
        for (var i = 0; i < ScienceUrl.length; i++) {
           
        
            getData(ScienceUrl[i].url, ScienceUrl[i].id);
            
            
        }
        document.getElementById("headline").innerHTML = "SCIENCE NEWS";
        document.getElementById("worldNewsSmall").innerHTML = "SCIENCE NEWS";
        document.getElementById("jumbotron").style.backgroundImage = " url('img/science.png')";

    }


   

    home();
    
    function home() {
       
        for (var i = 0; i < worldtUrl.length; i++) {
            getData(worldtUrl[i].url, worldtUrl[i].id);

        }
    }
});




























   
    

