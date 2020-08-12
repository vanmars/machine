$(document).ready(function (){
  // Create event listener for submit
  $("#form").submit(function (event) {
    // Create variable for user input
    const messageInput = $("input#message").val();
    // Target input value and append it to the return div
     let newMessage = messageInput.toUpperCase();
     $("#return-p").text(newMessage + "!").css("fontSize", "+=1000%");
    // Prevent event default
    event.preventDefault();
  });
});