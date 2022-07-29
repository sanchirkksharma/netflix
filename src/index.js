import React from "react";
import ReactDOM  from "react-dom";
import Cards from './App';
import './index.css';
import Cardsdata from './Cardsdata';

function ncard (value){
  return(
    <Cards 
    key={value.id}
    imgsrc={value.imgsrc}
    sname={value.sname}
    link= {value.link} />

  );
}


ReactDOM.render(
  <>
  <h1 style={{textTransform:'uppercase', textAlign:'center', fontFamily:'Cormorant SC, serif', marginTop:'0', marginBottom:'30px',padding:'30px 0', backgroundColor:'white', wordSpacing:'5px'}}>list of top 3 netflix series in 2022</h1>

  {Cardsdata.map(ncard)}
  
  </>,

  document.getElementById('root')
);