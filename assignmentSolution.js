function downloader(url,cb){

    console.log("Downloader started download data from " ,url)

    setTimeout(()=>{

        console.log("Downloaded complete");
        let downloadedData= "dummy content"
        cb(downloadedData);
    },4000)


}

function writeFile(data,cb){

  console.log("We started to writing our file from" , data);

    setTimeout(()=>{
   
        console.log("writing compleated");
        let fileName= "dummy.txt"
        cb(fileName)
    },2000)
}


function uploadFile(fileName,newUrl,cb){

    console.log("started uploading file in " , fileName ,  "on the url", newUrl);
  
      setTimeout(()=>{
     
          console.log("uploading compleate");
          let uploaded= "success"
          cb(uploaded)
      },3000)
  }


console.log("Starting the program");
downloader("www.google.com",(downloadedData)=>{
writeFile(downloadedData,(fileName)=>{
uploadFile(fileName,"www.drive.google.com",(uploaded)=>{


    })

})
})