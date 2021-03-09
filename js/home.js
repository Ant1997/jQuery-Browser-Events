$(document).ready(function () {
       $("#mainInfoDiv").show();
       $("#akronInfoDiv").hide();
       //$("#akronWeatherButton").hide();
       $("#minneapolisInfoDiv").hide();
       //$("#minneapolisWeatherButton").hide();
       $("#louisvilleInfoDiv").hide();

       $("#minneapolisWeather").hide();
       $("#louisvilleWeather").hide();
       $("#akronWeather").hide();


   });

$("#mainButton").on("click", function () {
      $("#mainInfoDiv").show();
      $("#akronInfoDiv").hide();
      //$("#akronWeatherButton").hide();
      $("#minneapolisInfoDiv").hide();
     //$("#minneapolisWeatherButton").hide();
      $("#louisvilleInfoDiv").hide();

      $("#minneapolisWeather").hide();
      $("#louisvilleWeather").hide();
      $("#akronWeather").hide();
  });

  $("#akronButton").on("click", function () {
        $("#mainInfoDiv").hide();
        $("#akronInfoDiv").show();
        //$("#akronWeatherButton").hide();
        $("#minneapolisInfoDiv").hide();
        //$("#minneapolisWeatherButton").hide();
        $("#louisvilleInfoDiv").hide();

        $("#minneapolisWeather").hide();
        $("#louisvilleWeather").hide();
        $("#akronWeather").hide();
    });

 $("#minneapolisButton").on("click", function () {
            $("#mainInfoDiv").hide();
            $("#akronInfoDiv").hide();
           // $("#akronWeatherButton").hide();
            $("#minneapolisInfoDiv").show();
           // $("#minneapolisWeatherButton").hide();
            $("#louisvilleInfoDiv").hide();

            $("#minneapolisWeather").hide();
            $("#louisvilleWeather").hide();
            $("#akronWeather").hide();
 });

  $("#louisvilleButton").on("click", function () {
             $("#mainInfoDiv").hide();
             $("#akronInfoDiv").hide();
            // $("#akronWeatherButton").hide();
             $("#minneapolisInfoDiv").hide();
            // $("#minneapolisWeatherButton").hide();
             $("#louisvilleInfoDiv").show();

             $("#minneapolisWeather").hide();
             $("#louisvilleWeather").hide();
             $("#akronWeather").hide();
  });

  $("#akronWeatherButton").on("click", function () {
      $("#akronWeather").toggle("slow");
  })

  $("#minneapolisWeatherButton").on("click", function () {
        $("#minneapolisWeather").toggle("slow");
  })

 $("#louisvilleWeatherButton").on("click", function () {
          $("#louisvilleWeather").toggle("slow");
 })

 $(".table").hover(
     // in callback
     function () {
         $(this).css("background-color", "WhiteSmoke");
     },
     // out callback
     function () {
         $(this).css("background-color", "");
     }
 );