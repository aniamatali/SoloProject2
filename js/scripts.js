$(document).ready(function() {
  $("form#form").submit(function(event) {

    var questionOne = $("select#Question1").val();
    var questionTwo = $("select#Question2").val();
    var questionThree = $("select#Question3").val();
    var questionFour = $("select#Question4").val();
    var questionFive = $("select#Question5").val();
      if (questionOne + questionTwo + questionThree + questionFour + questionFive < 6 ) {

        $("#output1").show();
        $("#output2").hide();
        $("#output3").hide();

      } else if (questionOne + questionTwo + questionThree + questionFour + questionFive >= 6 && < 11) {
        $("#output2").show();
        $("#output1").hide();
        $("#output3").hide();

      } else if (questionOne + questionTwo + questionThree + questionFour + questionFive >= 11 && < 16) {
        $("#output3").show();
        $("#output1").hide();
        $("#output2").hide();
      }



event.preventDefault();

});

});
