const fs = require('fs');

fs.readFile('data.json','utf8', (err,data)=>{
  if(err){
    console.log(err);
    return;
  }

  //console.log(data);
  const jsonData = JSON.parse(data);
  //console.log(data)
  console.log(jsonData.name);
  console.log(jsonData.age);
  console.log(jsonData.city);
})
