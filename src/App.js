import React from 'react';


function Cards(props){
  
  return (
  
    <>
    <div className='mainarea'>
    <div className='posterarea'><img src={props.imgsrc} alt='picture'/>
      <div className='posterinfo'><span className='postercategory' style={{fontWeight: 'lighter', backgroundColor:'white'}}>A NETFLIX ORIGINAL SERIES</span>
      <h3 style={{backgroundColor:'white'}}>{props.sname}</h3>
      <a href={props.link} target='_main' ><button style={{backgroundColor : 'white'}}>Watch Now</button></a>
      </div>
    </div>
  </div>
  </> );
}

export default Cards;