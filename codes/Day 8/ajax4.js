$(document).ready(function () {
    try {
        $.ajax({
            type: "get",
            url: "https://api.unsplash.com/search/photos?query=nature&client_id=shd",
            
            success: function (response) {
                console.log("successful");
                
            },
            error: function(xhr,status,error) {
                x=xhr.status
                if(x==403){
                    alert("Forbidden")
                }
                else if(x==401){
                    alert("Unauthorized")
                }
                else if(x==400){
                    alert("Bad Request")
                }
                else if(x==500){
                    alert("Internal Server Error")
                }
                else if (x==404){
                    alert("page not found")
                }
                else{
                    alert("Error: " + x)
                }

                
            }
            
        });
    } catch (e) {
        console.log(e.message);
               
        
    }
});