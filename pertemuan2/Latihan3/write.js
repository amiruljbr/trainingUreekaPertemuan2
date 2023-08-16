const fs = require('fs');
const newData = {
  name: "Devin",
  age: 20,
  city: "Jakarta"
}

const jsonString = JSON.stringify(newData,null,2);

fs.writeFile('newJson.json', jsonString, 'utf8', (err)=>{
  if(err){
    console.log(err);
    return;
  }
})