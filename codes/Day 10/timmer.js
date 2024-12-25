let i = 0

// setInterval(function(){
//     i++

//     console.log(i , "sec");
// },1000)
// setTimeout(() => {
    //     console.log("1 sec");
    // }, 1000);
    // let recursive = function () {  
        //     console.log("1 sec completed");
        //     setTimeout(recursive, 1000);
        // }
        // recursive()


        function welcome() {
            console.log("Welcome");
        }
        let x =setInterval(welcome, 3000);
        // let y =setTimeout(welcome, 3000);
        // clearTimeout(y)
        // clearInterval(x)



        // setImmediate(function(){
        //     console.log("1 sec");
        // })