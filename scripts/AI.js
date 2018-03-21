
var AI = function() {

  this.process = function(message) {
    if(username.length < 3) {
      username = message;
      sendMessage(`Nice to meet you ${username}, How are you doing`);
    }

    if(message.indexOf("how are you") >= 0) {
      sendMessage(`Am fine thank you!`);
    }
  }
};
