

// function click1(){
//     document.querySelector(".button").style.backgroundColor="red"
// }

// 2. Make a paragraph change its font size when hovered over.

document.querySelector("p").addEventListener("mouseover", function(e){
    // document.querySelector("p").style.fontSize="24px"
     this.style.fontSize="24px"
})

// document.querySelector("p").addEventListener("click", function(e){
//     document.querySelector("p").style.fontSize="24px"
// })

// document.querySelector("p").addEventListener("mouseout", function(){
//     document.querySelector("p").style.fontSize="16px"
// })