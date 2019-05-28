"use strict";

let userData = [];

function fetchRequest(url) {
    return fetch(url)
      .then(res => res.json())
      .catch(err => console.log("Something went wrong"));
  }
  
  
    fetchRequest("https://randomuser.me/api/")
  .then(data => {
      console.log(data);
  
      const image = data.results["0"].picture.large;
      const fName = data.results["0"].name.first;
      const lName = data.results["0"].name.last;
      const address = data.results["0"].location.street;
  
      getImg(image);   
      getUser(fName, lName);  
      pushAddress(address);
  
  });

  function getUser(f,l) {
    document.getElementById("aPerson").innerHTML = f +" "+ l;
  }

  function getImg(img) {
    cardImg.innerHTML = `<img src=${img}>`
  }

  function pushAddress(add){
      userData.push(add)
  }

  function getData(){
      moreData.innerHTML = userData
  }
 