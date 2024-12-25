// let url=new URL("Example:- https://webisoftech.com")
// url.searchParams.set("p1",'val1')
// // url.searchParams.append('p1','val1')
// document.write(url)

url=new URL("http://127.0.0.1:3000/page_redirection_4_success.html")
document.getElementById("submit").addEventListener("click",(e)=>{
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let username = document.getElementById("username").value
    let password = document.getElementById("pass").value

    url.searchParams.append('fname',fname)
    url.searchParams.append('lname',lname)
    url.searchParams.append('username',username)
    url.searchParams.append('password',password)



    document.write(url)
    location.replace(url)
    


    // if(username=="vaishnav15" && password=="abc123"){
    //     location.replace(url)
    // }
    // else{
    //     alert("Invalid credentials")
    // }
})