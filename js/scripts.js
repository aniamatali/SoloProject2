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
        $("#output1").show();
        $("#output2").hide();
        $("#output3").hide();
      } else if (result = 6 && result <= 10) {
        $("#output2").show();
        $("#output1").hide();
        $("#output3").hide();
      } else if (result > 10 ) {
        $("#output3").show();
        $("#output1").hide();
        $("#output2").hide();
      }

      event.preventDefault();

    });
  });

//     $("output1").show();
//
//   alert(total);
//
//   })
// });
// $(document).ready(function() {
//   $("form#form").submit(function(event) {
//
//
// //     var total = add("#Question1","Question2","Question3","Question4","Question5").val());
// //       if (questionOne + questionTwo + questionThree + questionFour + questionFive < 6 ) {
// //
// //         $("#output1").show();
// //         $("#output2").hide();
// //         $("#output3").hide();
// //
// //       } else if (questionOne + questionTwo + questionThree + questionFour + questionFive >= 6 && < 11) {
// //         $("#output2").show();
// //         $("#output1").hide();
// //         $("#output3").hide();
// //
// //       } else if (questionOne + questionTwo + questionThree + questionFour + questionFive >= 11 && < 16) {
// //         $("#output3").show();
// //         $("#output1").hide();
// //         $("#output2").hide();
// //       }
// //
// //
// //
// // event.preventDefault();
// //
// // });
// //
// // });
