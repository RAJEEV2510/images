import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import logo from './PicsArt_05-27-09.29.17.png'
import App from './App';
import * as serviceWorker from './serviceWorker';

function Header(){

return(<>

<div style={{width:"110%",backgroundColor:'black',height:'auto',display:'flex',justifyContent:'space-around'}}>
<div>
  <img src={logo} style={{height:'100px',width:'100px',borderRadius:'50%',marginTop:'10px',marginLeft:'10px',marginRight:'30%'}}></img>
</div>
  <div>
  <h3 style={{color:'deepskyblue' ,marginLeft:'80px'}}>USEFUL LINKS</h3>
  <h4> 
<a href="https://codingso.blogspot.com/?m=1">Data Structure website</a>
<a href="http://techiu.epizy.com/index.php?i=1" > Portfolio Website</a>
<a href="https://github.com/RAJEEV2510/images" >Github link</a>
<a href="http://techiu.epizy.com/codeeditor.html"  >Code Editor</a>
<a href="http://passwordv.herokuapp.com/"  >Password Management <br></br>voice assistant</a>
<a href="https://secretechat.herokuapp.com/"  >secret Chat </a>




</h4>
  
  </div>
  </div>

<div  style={{position:'absolute',left:"40%",top:'6300px',color:'pink'}}>
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
