import React from 'react';
const deetsStyleTJN = {
  alignItems: "flex-start",
  height: "auto",
  maxHeight: "70vh",
  overflowY: "scroll",
}

const miniHeaderStyle  = {
  fontFamily: '"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif',
  fontSze: '16px',
  paddinBottom: '2vh',
  fontWeight: '550',
  paddingBottom: '6px'
}
const deetP = function(num = Math.floor(Math.random() * 35) ) {
  
    return {
    fontSize: `14px`,
    fontWeight: `400`,
    lineHeight: `1.6`,
    opacity: `.97`,
    paddingBottom: `${num}px`,
    }
}
export  const Deets = (props) =>  (
  
    <div style={deetsStyleTJN}>
    <div style={miniHeaderStyle}  >Item details</div>
      <div style={deetP()} >{props.description[0]}</div>
      <div style={deetP()}  >{props.description[1]}</div>
      <div style={deetP()}>{props.description[2]}</div>
      <div style={deetP()}>{props.description[3]}</div>
      <div style={deetP()}>{props.description[4]}</div>
      <div style={deetP()}>{props.description[5]}</div>
      <div style={deetP()}>{props.description[6]}</div>
      <div style={deetP()}>{props.description[7]}</div>

      <div style={deetP(0)}>{props.description[8]}</div>
      <div style={deetP(0)}>{props.description[9]}</div>
      <div style={deetP(0)}>{props.description[10]}</div>
      <div style={deetP(0)}>{props.description[11]}</div>
      <div style={deetP(0)}>{props.description[12]}</div>
      <div style={deetP(0)}>{props.description[13]}</div>
      <div style={deetP(0)}>{props.description[14]}</div>
    </div>
  )


  // + Learn more about this item