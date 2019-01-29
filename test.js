let object = {
    firstName: 'Airy',
    lastName: 'Sim'
  };
  //take on object, then assign the value of it's propertie(s) to a new variable or variables. Variables created this way are variables unto themselves, and do not point to the object property from whence they were initially defined
  
  let { 
    firstName: f, lastName: l 
  } = object;
  
  console.log(f);
  console.log(l);
  
  object.firstName = 'Berry';
  console.log(f); //f does not change, as it's its own variable now
  f = 'Carry';
  console.log(f); 
  
  // PROMISES
  
  const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=58748f2a8d98a84d9e4428c1fa051d70';
  console.log(weatherAPI);
  
  fetch(worldAPI).then(gotData).catch(gotError);
  // then = a function that receives a function to be executed when the promise is fulfilled
  // catch = a function that receives a function when the promise failed
  
  function gotData(d){
    console.log("Got the data right here: " + d);
    console.log(d);
  }
  
  function gotError(e) {
    console.log(e);
  }