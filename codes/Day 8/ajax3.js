$(document).ready(function () {
    $('#select').change(function () {
        $.ajax({
            type: 'get',
            url: 'https://reqres.in/api/users?page=2',
            success: function (response) {
                // document.write(JSON.stringify(response))
                let y = $('#select').val()
                let x = ''
                switch (y) {

                    case 'id':
                        for (i = 0; i < response.data.length; i++) {
                            //    document.write(JSON.stringify(response.data[i].id)+"<br>")
                            x = x + JSON.stringify(response.data[i].id) + "<br>"
                            $('#para').html(x)
                        }
                        break
                    case 'email':
                        for (i = 0; i < response.data.length; i++) {
                            // document.write(JSON.stringify(response.data[i].email)+"<br>")
                            x = x + JSON.stringify(response.data[i].email) + "<br>"
                            $('#para').html(x)
                        }
                        break
                    case 'first_name':
                        for (i = 0; i < response.data.length; i++) {

                            // document.write(JSON.stringify(response.data[i].first_name)+"<br>")
                            x = x + JSON.stringify(response.data[i].first_name) + "<br>"
                            $('#para').html(x)
                        }
                        break
                    case 'last_name':
                        for (i = 0; i < response.data.length; i++) {
                            // document.write(JSON.stringify(response.data[i].last_name)+"<br>")
                            x = x + JSON.stringify(response.data[i].last_name) + "<br>"
                            $('#para').html(x)
                        }
                        break
                    default:
                        document.write("error: unknown")
                        break
                }
            },
            error: function () {
                console.log("some error occured");

            }

        })
    })







});

