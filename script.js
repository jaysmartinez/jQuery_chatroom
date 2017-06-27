main = function(){
      messageBySend();
      messageByEnter();
      deleteMessage();
      lonelyButton();
};

function grabMessage() {
  var messageBody = $("#new-message-body").val();
  $("#new-message-body").val("");
  addMessageToChat(messageBody);
}

function messageBySend() {
  $('#new-message-button').click(function(){
    grabMessage()
  });
};

function messageByEnter() {
  $('#new-message-body').keypress(function(i){
    if (i.which === 13) {
      grabMessage()
    };
  });
};

function deleteMessage() {
  $("#conversation").on("click", ".delete", function(){
    $(this).parent().remove();
  });
};

function addTimeStamp() {
  var time = new Date();
  return time.getHours() + ":" + time.getMinutes();
};

var position = 0;
function getRandom() {
  var myArray = ['Me', 'Myself', 'I'];
  return myArray[position ++ % 3];
};

function addMessageToChat(argument, person=getRandom()) {
  $("#conversation").append(
    '<li class="message">\
    <a class="delete" href="#">Delete</a>\
    <h3 class="author">' + person + '</h3>\
    <p class="message-body">' + argument + '</p>\
    <span class="timestamp">' + addTimeStamp() + '</span>\
    </li>');
};

function lonelyButton() {
  $('#lonely').click(function(){
    $.ajax({
      url: 'http://api.icndb.com/jokes/random',
      success: function(data){
        addMessageToChat(data.value.joke);
      }
    });
  });
};

$(document).ready(main);
