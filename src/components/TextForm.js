import React ,{useState} from 'react'

export default function TextForm(props) {

  const handleUpCase = () =>{
    //console.log("uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase!", "success");
  }
  const handleLowCase = () =>{
    //console.log("uppercase is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase!", "success");
  }
  //my add
  const handleClearCase = () =>{
    let newText = '';
    setText(newText)
    props.showAlert("Textarea Cleared!", "success");
  }
  //copyText
  const handleCopyCase = () =>{
    let text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard!", "success");
  }
  
  const handleOnChange = (event) =>{ 
    //console.log("onChange is clicked");
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'? '#0f1114':'white', color : props.mode==='dark'? 'white':'black'}} id="myText" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-1" onClick={handleUpCase}>To UpperCase</button>
       <button className="btn btn-primary mx-1" onClick={handleLowCase}>To LowerCase</button>
       <button className="btn btn-primary mx-1" onClick={handleClearCase}>Clear</button>
       <button className="btn btn-primary mx-1" onClick={handleCopyCase}>Copy</button>
       </div>
       <div className="container my-3" style={{color : props.mode==='dark'? 'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} mumites to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text on above textbox"}</p>
       </div>
       </>
  )
}
