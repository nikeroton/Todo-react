import React, { useState } from 'react';

function Todoinput(props) {
  const[inputText,setInputText]= useState("");
	return (
		<div className="input-container">
			<input type="text" className="input-box-todo"  placeholder='Enter the Todo item'
      value={inputText}
      onChange={text=>{
        setInputText(text.target.value)
      }}/>
			<button className="add-btn" onClick={()=>{props.addList(inputText); setInputText(" ")
      }}>Add</button>
      {/* <div>{inputText}</div> */}
		</div>
	);
}

export default Todoinput;
