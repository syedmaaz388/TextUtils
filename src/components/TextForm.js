import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

  const [text,setText] = useState('');

  const handleUpText = () => {
    setText(text.toUpperCase());
    props.showAlert(" Converted to Upper Case","success");

  }
  const handleLoText = () => {
    setText(text.toLowerCase());
    props.showAlert(" Converted to Lower Case","success");

  }
  const ClearNow = () => {
    setText("");
    props.showAlert(" Clear ho gaya","success");

  }
  const handleCopy = () => {
    var mytext = document.getElementById("myBox");
    mytext.select();
    navigator.clipboard.writeText(mytext.value);
    document.getSelection().removeAllRanges();
    props.showAlert(" Copy Ho gaya","success");

  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra Spaces hat gaye","success");

  }
  const handleChange = (event) => {
    setText(event.target.value)
  }
 

return (
  <>
<div style={{color : props.mode === 'dark' ? 'white':'black'}} >
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea style={{backgroundColor : props.mode === 'dark' ? '#27374D':'white', color : props.mode === 'dark' ? 'white':'black'}}  onChange={handleChange} value={text} className="form-control" id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length === 0} onClick={handleUpText}  className='btn btn-primary mx-1 my-1'>Convert to UpperCase</button>
<button disabled={text.length === 0} onClick={handleLoText}  className='btn btn-primary mx-1 my-1'>Convert to LowerCase</button>
<button disabled={text.length === 0} onClick={handleCopy}  className='btn btn-primary mx-1 my-1'> Copy Text</button>
<button disabled={text.length === 0} onClick={handleExtraSpaces}  className='btn btn-primary mx-1 my-1'> Remove Extra Space</button>
<button disabled={text.length === 0} onClick={ClearNow}  className='btn btn-primary mx-1 my-1'> Clear All</button>

</div>
<div className='container' style={{color : props.mode === 'dark' ? 'white':'black'}}>
<h1 className='mb-4' >Your text Summary</h1>
<p>{text.split(" ").filter((element) => {return element.length !== 0}).length} Words and {text.length} Characters</p>
<p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length > 0 ? text:"Nothing to preview!"}</p>
</div>
</>    
  )
}
  