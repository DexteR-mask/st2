import React from 'react';

var ent;

 function getdata(){
  const xhr = new XMLHttpRequest();
const method = "GET";
const url = "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";

xhr.open(method, url, false);
xhr.onreadystatechange = () => {
  // In local files, status is 0 upon success in Mozilla Firefox
  if (xhr.readyState == 4) {
    const status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
     
      ent = JSON.parse(xhr.responseText);

     
    } else {
      // Oh no! There has been an error with the request!
    }
  }
};
xhr.send();
   
    
}
function data()
{

  var rows = [];
for (var i = 0; i < 20; i++) {
    rows.push(
      
      
      <div style={{margin : "1%  0.3%"}}>
       <p style={{width: "200px",
    "word-wrap": "break-word",}}>{ent[i].title}</p> 
      <img src={ent[i].thumbnailUrl} ></img>
     
      </div>
    
    
    );
}
return rows;
}

function main() {
   const x = getdata();
   const mystyle = {
    display: "flex" , 
    "flex-wrap":  "wrap", 
    
  };
  
  return (

    <div className="flex-container" style={mystyle}>
      
    
    
      {data()}
       
       
       </div>

  )
}
export default main;