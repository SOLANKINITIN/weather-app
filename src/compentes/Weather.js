import React from 'react';


const Weather = props =>(
  //   <div>
  //   {props.city && props.country &&   <p> Location: {props.city}, {props.country}   </p>}
  //   {props.temperature && <p>   Temperature: {props.temperature}</p>}
  //   {props.humdidity &&  <p> Humdidity:{props.humdidity}</p>}
  //   {props.description && <p> Condition: {props.description}</p>}
  //   {props.error && <p>{props.error}</p>}
  
  //   </div>
  // );
  <div className="row">
  <div className="co s12 m12">
 {props.id && <label><h4>ID : {props.id}</h4> </label>}
 </div>
 <div className="co s12 m12">
 { props.city && props.country && <label><h4>Location : {props.city},{props.country}</h4> </label>}
 </div>
 <div className="co s12 m12">
 {props.temperature && <label><h4>Temperature : {props.temperature}</h4> </label>}
 </div>
 <div className="co s12 m12">
 {props.humidity && <label><h4>Humidity : {props.humidity}</h4> </label>}
 </div>
 <div className="co s12 m12">
 {props.description && <label><h4>Condition : {props.description}</h4></label>}
 </div>
 <div className="co s12 m12">
 {props.error && <label> <h4>{props.error} </h4></label>}
 </div>
</div>
);



export default Weather;
