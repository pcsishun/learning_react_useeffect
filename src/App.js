import './App.css';
import React, { useState, useEffect } from 'react';

function App( { login } ) {

  const [data, setData] = useState(null); // set state null to defaut parameter 

  useEffect(() =>
{  fetch(`https://api.github.com/users/${login}`)
  .then((response) => response.json())
  .then(setData);
},[]);

if(data){
  return 
  <div>
    {JSON.stringify(data)}
  </div>
}
  return (
    <div>
      No user avaiable.
    </div>
  );
}

export default App;
