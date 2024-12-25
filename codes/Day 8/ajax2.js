$.ajax({
    type: "get",
    url: "https://api.data.gov.sg/v1/environment/air-temperature",
    success: function (response) {
        // document.write(JSON.stringify(response.items[0].readings[0].value));
        // document.write(JSON.stringify(response.metadata.stations.length));
        x=JSON.stringify(response.items[0].readings[0].station_id)
        

        for(i=0;i<response.metadata.stations.length;i++){
            document.write( JSON.stringify(response.metadata.stations[i].name)+"  :   ")
            document.write(JSON.stringify(response.items[0].readings[i].value)+"<br>" )
            
        }







        // for(i=0;i<response.metadata.stations.length;i++){
        //     let s_id = JSON.stringify(response.metadata.stations[i].id)
        //     for(j=0;j<response.items[0].readings.length;j++){
        //         if(x==s_id){
        //             document.write("<br>", JSON.stringify(response.metadata.stations[i].name) ," : ", JSON.stringify(response.items[0].readings[j].value) )
                    
        //         }
        //     }
        // }
    },
    error : function(){
        console.log("hello");
    }
});