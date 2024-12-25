$(document).ready(function () {
    

    // x=$('.class').val

    // $.post("https://reqres.in/api/users",
    //     {
    //         "name": "Vaishnav",
    //         "job": "leader"
    //     },function(data,status){
    //         document.write(JSON.stringify(data));
    //         console.log(data);
            
    //         // document.write(status)
    //         console.log(status);     
    // })


    $('#submit').click(function(){

    const name = $('#name').val();
    const email =$('#email').val();
    const pass =$('#pass').val();

        $.post("https://reqres.in/api/users",{
            "name" : name ,
            "email" : email ,
            "password" : pass
        },function(data,status){
            document.write(JSON.stringify(data));
            console.log(status);
            
        })
    })


});