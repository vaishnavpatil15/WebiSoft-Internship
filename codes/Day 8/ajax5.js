
$(document).ready(function (){
    $('#submit').click(function(){
        let name=$('#name').val();
        let email=$('#email').val();
        let password=$('#password').val();
        $.ajax({
            type: "post",
            url: "https://reqres.in/api/users",
            data: {
                "name": name,
                "email": email,
                "password": password
            },
            success: function (response,status) {
                document.write(JSON.stringify(response))
                console.log(status);
            }
        });
    })
});