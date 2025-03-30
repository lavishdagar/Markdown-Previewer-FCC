import React from 'react';
var inputStyle = {
    width: "700px",
    height: "50vh",
    marginLeft: '300px',
    
    padding:"10px",
    overflow:'hidden',
  };
const Markdown = (props) => (
    <>
        <h2 className='text-center'>Editor</h2>
        <textarea
        style={inputStyle}
            className="input"
            value={props.markdown}
            
            id="editor"
            onChange={(e) => {
                props.updateMarkdown(e.target.value);
            }}
        ></textarea>
    </>
)


export default Markdown;