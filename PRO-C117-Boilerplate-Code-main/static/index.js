//Create date variable
var data= new Date()
var display_date = "Date:" + data.toLocaleDateString()
//Load HTML DOM
$(document).ready(function (){
    $("#display_date").html(display_date)
})
//Define variable to store predicted emotion
var predicted_emotion

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        var input_data = {
            "text" : $('#text').val()
        }
        //AJAX call

        $.ajax({
            type:'POST',
            url:'/predict-emotion',
            data:JSON.stringify(input_data),
            dataType:'json',
            contentType:'application/json',
            success: function(result){
                
                // Result Received From Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion;
                predicted_img= result.data.predicted_img
                // Display Result Using JavaScript----->HTML
                

                $('#prediction').html(predicted_emotion);
                $('#prediction').css("display","block");

                $('#emo_img_url').attr('src', predicted_img);
                $('#emo_img_url').css("display", "block");
                
            },
            //Error function
            error: function(){

            }
        });
    });
})

