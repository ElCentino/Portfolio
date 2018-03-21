

$(function() {

    var currentLi;

    let fadeSpeed = 100;
    
    function setImage(src, id) {
        $("#main").attr("src", src);
        
        var path = `text/${id}.txt`;
        
        $.get(path, function(data) {
            $("#info p").html(data);
        });
    }

    $("#portfolio img").click(function() {
        var src = $(this).attr("src");
        var id = $(this).attr("alt");
        currentLi = $(this).parent();
        setImage(src, id);
        $("#frame").fadeIn();
        $(".overlay").fadeIn();
        $("#left, #right").fadeOut();
    });

    $(".overlay").click(function() {
      $("#frame").fadeOut();
      $(this).fadeOut();
    });

    $("#left").click(function() {

      let prevLi;

      if(currentLi.is(":first-child")) {
        prevLi = $("#portfolio li").last();
      } else {
        prevLi = currentLi.prev();
      }

      var src = prevLi.children("img").attr("src");
      var id = prevLi.children("img").attr("alt");
        
      $("#main").fadeOut(fadeSpeed, function() {
        $(this).fadeIn(fadeSpeed);
          setImage(src, id);
      });
      currentLi = prevLi;
    });

    $("#right").click(function() {

      let nextLi;

      if(currentLi.is(":last-child")) {
         nextLi = $("#portfolio li").first();
      } else {
         nextLi = currentLi.next();
      }

      var src = nextLi.children("img").attr("src");
      var id = nextLi.children("img").attr("alt");
        
      $("#main").fadeOut(fadeSpeed, function() {
        $(this).fadeIn(fadeSpeed);
         setImage(src, id);
      });
      currentLi = nextLi;
    });

    $("#frame").on({
      mouseenter: function() {
        $("#left, #right, #info").fadeIn();
      },
      mouseleave: function() {
          $("#left, #right, #info").fadeOut();
      }
    });
});
