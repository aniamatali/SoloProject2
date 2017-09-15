var total = function(number1,number2,number3,number4,number5) {
  return number1 + number2 + number3 + number4 + number5;
};

$(document).ready(function() {
  $("#form").submit(function(event){
    var number1 = parseInt($("#Question1").val());
    var number2 = parseInt($("#Question2").val());
    var number3 = parseInt($("#Question3").val());
    var number4 = parseInt($("#Question4").val());
    var number5 = parseInt($("#Question5").val());

    var result = total(number1,number2,number3,number4,number5);
      if (result >1 && result <= 6) {
        $(".yourcourse").show();
        $(".bottom").show();
        $(".html").show()
        $(".sharp").hide()
        $(".ruby").hide()
        $("#output1").show();
        $("#output2").hide();
        $("#output3").hide();
      } else if (result > 6 && result <= 10) {
        $(".yourcourse").show();
        $(".bottom").show();
        $(".sharp").show()
        $(".html").hide()
        $(".ruby").hide()
        $("#output2").show();
        $("#output1").hide();
        $("#output3").hide();
      } else if (result >= 10 && result <= 20) {
        $(".yourcourse").show();
        $(".bottom").show();
        $(".ruby").show()
        $(".html").hide()
        $(".sharp").hide()
        $("#output3").show();
        $("#output1").hide();
        $("#output2").hide();
      }

      event.preventDefault();

    });
  });
