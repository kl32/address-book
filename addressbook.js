const newUser = [];

function get(){
    fetch("https://randomuser.me/api/")
      .then( res => res.json())
      .then( data => console.log("Array of data: ",data))
      .catch( err => console.log("oops, looks like we got an error: ", err))
      .finally( ()=> console.log("finally, This function always runs...")) // Whether or not there's an error or success, this will happen such as stopping a loading wheel on the front end
      
      return newUser;
  }

 