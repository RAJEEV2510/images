import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import logo from './PicsArt_05-27-09.29.17.png'
import App from './App';
import * as serviceWorker from './serviceWorker';

function Header(){

return(<>
<div style={{width:"100%",backgroundColor:'black',height:'50px',display:'flex',justifyContent:'space-around',color:"white",paddingTop:"5px"}}>
    Deepak Copyright  Ⓒ 2021
 </div>  
  
</>)

}

ReactDOM.render(
  <>
    <App />
    <Header></Header>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
