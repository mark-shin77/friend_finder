    $("#submit").on('click', function(){
        // function validateInput(){
        //     var isValid = true;
        //     $('.form-control').each(function(){
        //         if($(this).val() === ""){
        //             isValid = false
        //         }
        //     })
        //     $(".user-choice").each(function(){
        //         if($(this).val() === ""){
        //             isValid = false;
        //         }
        //     })
        // };
        // if(validateInput()){
            var userData = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                scores: [
                    $("#q1").val(),
                    $("#q2").val(),
                    $("#q3").val(),
                    $("#q4").val(),
                    $("#q5").val(),
                    $("#q6").val(),
                    $("#q7").val(),
                    $("#q8").val(),
                    $("#q9").val(),
                    $("#q10").val(),
                    $("#q11").val(),
                    $("#q12").val(),
                    $("#q13").val(),
                    $("#q14").val(),
                    $("#q15").val()
                ]
            };
            console.log('click is registered')

            var currentURL = window.location.origin;

            $.post(currentURL + "/api/friends", userData, function(data){
                alert("working");
            })
        })
    // })