import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
//SY7vrCxUm2e8Vl88A5dY89Ug8xa2u3wQBFkZ23TdPB0
function App() {
  //use at the top
  const [value,setvalue]=useState("")
  const [results,setresults]=useState([])
  const [change,changeset]=useState(false)
  const [cssvalue,setCss]=useState('polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)')
//using for render the dom 
  useEffect(() => {
    // Update the document title using the browser API
    if(change==false)
    changes()
  });
  const changes=()=>{
  
    fetch(`https://api.unsplash.com/search/photos?client_id=SY7vrCxUm2e8Vl88A5dY89Ug8xa2u3wQBFkZ23TdPB0&query=loop&per_page=100`).then(res=>res.json()).then(data=>{
      
      setresults(data.results)  
    })
    

  }
  const fetchImages=()=>{
    
   fetch(`https://api.unsplash.com/search/photos?client_id=SY7vrCxUm2e8Vl88A5dY89Ug8xa2u3wQBFkZ23TdPB0&query=${value}&per_page=10000`).then(res=>res.json()).then(data=>{
      
    setresults(data.results)  
    changeset(true)
  })
}

const css=(event)=>{

if(event.target.value==='hexagon')
{
  setCss('polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)')
}
else if(event.target.value==='triangle')
{
setCss('polygon(50% 0%, 0% 100%, 100% 100%)')
}
else if(event.target.value==='paralleogram')
{
  setCss('polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)')
}
else if(event.target.value==='square')
{
  setCss('inset(5% 20% 15% 10%)')
}
//polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)
else if(event.target.value==='rablet')
{
  setCss('polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)')
}
//circle(50% at 50% 50%);
else if(event.target.value==='circle')
{
  setCss('circle(50% at 50% 50%)')
}

}
  return (
    <div className="App">
    <div className="header">
    <marque scroll="left"> CREATIVE <span className="neon">IMAGE</span> GALLERY</marque>
    
    </div>
    <div className="mydiv">
    <span>Search:</span>
    <input type="text" value={value} placeholder="search images" onChange={(event)=>{
      setvalue(event.target.value);


    }}></input>

    <button className="btn" onClick={fetchImages}>Search</button>
    </div>
    <div className="Shape"><center>
    <h2 style={{color:"white" ,marginLeft:"50px"}}>You can change the shape of pics</h2>
    

    <select name="change" onChange={css}>
    <option value="hexagon"> Hexagon</option>
    <option value="triangle">Triangle</option>
    <option value="paralleogram">Parralleogram</option>
    <option value="square">square</option>
    <option value="rablet">Rablet</option>
    <option value="circle">circle</option>
    </select>
    </center>
    </div>
    

    <div className="Mygallery" >
  {
    results.map((value,index)=>{
      return (<>
        
        <div>
        <img key={index} src={value.urls.regular}
        style={{
          clipPath:cssvalue}}></img>
        
            <a  href={`${value.urls.regular}/download?force=true`} download="">
            <button style={{color:"#00F260",backgroundColor:'black',width:'200px',height:'40px',marginLeft:"-54px",borderBottomColor:'#0575E6' ,marginTop:"20px",
          borderTopColor:'#e73827',marginBottom:'30px',borderLeftColor:'#ec008c',borderRightColor:'#ec008c',boxShadow:'2px 2px 10px grey'
          }}> Preview</button>
            </a>
            </div>
          </>
      )

    })
  }      
    
    </div>
    </div>
    
  
  );
}

export default App;
