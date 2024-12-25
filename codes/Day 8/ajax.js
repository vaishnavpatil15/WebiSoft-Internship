
$(document).ready(function () {
//     $.ajax({
//         type: "get",
//         url: "https://reqres.in/api/users?page=2",
//         success: function (data) {
//             console.log(data);
//             $('#a').html(JSON.stringify(data))
//         },
//         Error : function(error){
//             console.log(error); 
//         }
//     });


    $.ajax({
        type: "get",
        url: "https://reqres.in/api/users?page=2",
        success: function (response) {
            console.log(response);
            // $('#a').html(JSON.stringify(response));
            // $('#a').html(JSON.stringify(response.data));
            // $('#a').html(JSON.stringify(response.data[0].email));
            // $('#a').html(JSON.stringify(response.data))
            for(i=0;i<response.data.length;i++){
                // $('#a').html(JSON.stringify(response.data[i].first_name))
                document.write(JSON.stringify( response.data[i].first_name), "<br>");
            }
        },
        Error : function(error){
            console.log(error); 
        }
    });





});