// $('#name').val("harry")

// $('#email').keypress(function(){
//     confirm('Are you sure you want to give email')
// })
// $("#btn").click(function(){
//     $("#btn").hide()
// })

$("#form").submit(function(e){
    if(confirm("are you sure you want to submit")){
        return true
    }
    else{
        e.preventDefault()
        return false
    }
})

$("#btn").click(function(){
    $(".div").animate({left: "50vh"},1000)
})

$('img').hover(function(){
    $(this).animate({opacity: 0.4},"slow")
})

// $('div p').animate({fontSize:'30px'},2000)

// $('#hello').parent().css('background-color','yellow')

$('#select').change(function(){
    alert($('#select').val())
    
})

// $.get("https://fake-json-api.mock.beeceptor.com/users", function (data,status){
//     // $(".jsonData").html(data)
//     // document.write(data)
//     // console.log(JSON.stringify(data))
//     console.log(JSON.stringify(data))
//     // console.log(status);  
// })

$.post("https://fake-json-api.mock.beeceptor.com/users",{name:"harry",channel:"code with harry"},function (data,status){
    document.write(data)
    document.write(status)
})



// $.get("https://api.unsplash.com/search/photos?query=nature&client_id=UTPKLgn1jOKvc9o7gpRDBpdIYxkUlUPThQXCGgbWGLw", function (data,status){
//     // $(".jsonData").html(data)
//     document.write(data)
//     // console.log(status);  
// })




