// function redirection(){
    // window.location="https://www.w3schools.com/jsref/met_win_confirm.asp"
    // window.location="http://127.0.0.1:3002/d:/STUDY/WebiSoft Internship/codes/Day 3/events.html"

    // var bname=navigator.appName
    // if(bname=="netscape"){
    //     window.location="https://www.w3schools.com/jsref/met_win_confirm.asp"
    // }
    // else if(bname=="Microsoft Internet Explorer"){
    //     window.location="https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"
    // }
    // else{
    //     window.location="https://www.geeksforgeeks.org/javascript-window-confirm-method/"
    // }
// }



function redirection(){
    window.location="http://127.0.0.1:3002/d:/STUDY/WebiSoft Internship/codes/Day 3/events.html"
}

document.write("you will redirect in 10 seconds")

const redirect=()=> { 
    setTimeout("redirection()",10000)
}
redirect()

// const cancelRedirect=()=>{
//     clearTimeout(redirect)
//     // console.log("redirect cancelled");
//     alert("redirect cancelled")
// }
// window.addEventListener("unload",cancelRedirect)





