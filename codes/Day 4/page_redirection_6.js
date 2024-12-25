const a=document.getElementById("lang")
console.log(a);
document.querySelector(".english").style.display="none";
document.querySelector(".marathi").style.display="none"
document.querySelector(".hindi").style.display="none"
// a.addEventListener("change",()=>{
//     console.log(a.value);
//     if(a.value=="english"){
//         document.querySelector(".english").style.display="block"
//         document.querySelector(".marathi").style.display="none"
//         document.querySelector(".hindi").style.display="none"
//     }
//     else if(a.value=="marathi"){
//         document.querySelector(".english").style.display="none"
//         document.querySelector(".marathi").style.display="block"
//         document.querySelector(".hindi").style.display="none"
//     }
//     else if(a.value=="hindi"){
//         document.querySelector(".english").style.display="none"
//         document.querySelector(".marathi").style.display="none"
//         document.querySelector(".hindi").style.display="block"
//     }
    
// })
document.querySelector(".c1").style.display="block"
        document.querySelector(".c2").style.display="none"
        document.querySelector(".c3").style.display="none"
a.addEventListener("change",()=>{
    console.log(a.value);
    if(a.value=="english"){
        document.querySelector(".c1").style.display="block"
        document.querySelector(".c2").style.display="none"
        document.querySelector(".c3").style.display="none"
    }
    else if(a.value=="marathi"){
        document.querySelector(".c1").style.display="none"
        document.querySelector(".c2").style.display="block"
        document.querySelector(".c3").style.display="none"
    }
    else if(a.value=="hindi"){
        document.querySelector(".c1").style.display="none"
        document.querySelector(".c2").style.display="none"
        document.querySelector(".c3").style.display="block"
    }
    
})
