// var borderWeight = "5px";
//
// $(".n_1").css("position", "absolute");
// $("input").css("margin", "30px");
// $("input").css("border", `${borderWeight} solid #000`);
//
//
// $("button").click(function() {
//
//   this.animationProps = {
//     left: '250px',
//     width: '30%',
//     height: '30%',
//     padding: '30px',
//     margin: '70px'
//   };
//
//   $(".n_1").animate(this.animationProps);
// });
//
// $("input").on({
//   mouseover: function() {
//     $(this).css("border", `${borderWeight} solid green`);
//   },
//   mouseout: function() {
//     $(this).css("border", `${borderWeight} solid #000`);
//   },
//   focusout: function() {
//     //$(".n_1").html($(this).val());
//   }
// });
//
// $(".n_1").click(function() {
//     $(".n_1").html($("input").val());
// });

var ai;
var username = "";

$(window).ready(function() {
  $("#textbox").val("");
  ai = new AI();
});

$(document).ready(main);

function getUsername() {
  sendMessage(`Hello, what is your name ?`);
}

function sendMessage(e) {
  let message = `<code class="current"><p><span class="bot">Bot : </span> ${e}</p></code>`;
  $(".log").append(message);
  $(".current").hide();
  $(".current").delay(500).fadeIn(1000, function() {
    $(this).removeClass("current");
  });
}

function main() {

  getUsername();

  $("#textbox").on({
    keypress: event => {
      if(event.which == 13 && $("#textbox")) {
          if($("#enter").prop("checked") && $("#textbox").val().length > 0) {
            $("#send").click();
            $("#textbox").val("");
          }
          event.preventDefault();
      }
    }
  });

  $("#send").on({
    click: () => {
      if($("#textbox").val().length > 0) {
        var userMessage = $("#textbox").val();
        $(".log").append(`<code><p><span id="user">USER</span> : ${userMessage.trim()} </p></code>`);
        $("#textbox").val("");
        $(".log").scrollTop($(".log").prop("scrollHeight"));
        ai.process(userMessage);
      }
    }
  });
}
