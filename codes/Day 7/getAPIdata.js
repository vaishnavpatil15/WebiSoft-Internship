$.get("https://fake-json-api.mock.beeceptor.com/users",function(data,status){
    var info=JSON.stringify(data)
    info=info.slice(2,info.length-3)
    // document.write(info)
    console.log(info);
    
    arr1=info.split("},{")
    // document.write(arr1[0],"<br><br>",arr1[1])
    // console.log(arr1[0]);
    
    for(i=0;i<arr1.length;i++){
        arr2=arr1[i].split(",")
        for(j=0;j<5;j++){
            // entry=arr2[j].split(":")
            document.write(arr2[j],"<br>")
        }
        document.write("<br><br>")
    }


    
})
