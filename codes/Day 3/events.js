// console.log(document.querySelector(".btn").style.backgroundColor="red");
// console.log(document.querySelector(".btn").style.color="yellow");
// document.querySelector(".btn").addEventListener("click",()=>{
//     document.querySelector(".btn").style.backgroundColor="blue";
//     document.querySelector(".btn").style.color="yellow";
// })
// let p = document.getElementById("para")
// function hover(){
//     document.getElementById("para").style.scale = "2"
// }
// function hover1(){
//     document.getElementById("para").style.scale = "1"
// }
// p.addEventListener("mouseenter",hover)
// p.addEventListener("mouseleave",hover1)


// let s=document.getElementById("f")
// s.addEventListener("submit",()=>{
//     alert("Form is Submited successfully!")
// })

// let count=0
// document.getElementById("chkBox").addEventListener("click",()=>{
//     count+=1
//     console.log("count: ", count);
    
// })



// document.querySelector(".btn").addEventListener("click",()=>{
//     document.getElementById("c").classList.toggle("show")
// })

// document.getElementById("ip").addEventListener("input",()=>{
//     // x=document.getElementById("ip").value
//     document.getElementById("text").innerHTML=document.getElementById("ip").value
// })

function add(a,b){
    return Number(a)+Number(b);
}
function sub(a,b){
    return Number(a)-Number(b);
}
function mul(a,b){
    return Number(a)*Number(b);
}
function div(a,b){
    if(b!=0){
        return Number(a)/Number(b);
    }
    else{
        alert("Error: Division by zero is not allowed!")
        return null;
    }
}



document.getElementById("button1").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"1"
});
document.getElementById("button2").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"2"
});
document.getElementById("button3").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"3"
});
document.getElementById("button4").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"4"
});
document.getElementById("button5").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"5"
});
document.getElementById("button6").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"6"
});
document.getElementById("button7").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"7"
});
document.getElementById("button8").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"8"
});
document.getElementById("button9").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"9"
});
document.getElementById("button0").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"0"
});
document.getElementById("buttonAdd").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"+"
});
document.getElementById("buttonSub").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"-"
});
document.getElementById("buttonMul").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"*"
});
document.getElementById("buttonDiv").addEventListener("click",()=>{
    z=document.getElementById("textarea").value
    document.getElementById("textarea").value=z+"/"
});
document.getElementById("buttonenter").addEventListener("click",()=>{
    x=document.getElementById("textarea").value
    if(x[1]=="+"){
        document.getElementById("textarea").value= add(x[0],x[2]) 
    }
    if(x[1]=="-"){
        document.getElementById("textarea").value= sub(x[0],x[2]) 
    }
    if(x[1]=="*"){
        document.getElementById("textarea").value= mul(x[0],x[2]) 
    }
    if(x[1]=="/"){
        document.getElementById("textarea").value= div(x[0],x[2]) 
    }
    })


// document.body.addEventListener("keypress",(e)=>{
//     document.body.innerHTML=e.key
    
// })



// document.getElementById("form").addEventListener("submit",(e)=>{
//     a=document.getElementById("pass")
//     if(a.value!="vaishnav"){
//         alert("Invalid Password!")
//         e.preventDefault()
//     }   
// })



