import React from 'react';
import { marked } from "marked";


var outputStyle = {
    width: "1200px",
    minHeight: "50vh",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px",
    
  };
const Previewer = (props) => (
    <>
    <h2 className='text-center'>Previewer</h2>
        <div style={outputStyle} id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown) }}/>
    </>
)

export default Previewer;