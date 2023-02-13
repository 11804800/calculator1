import { useState } from 'react';
import './App.css';

function App() {
  const [Total, setTotal] = useState("");
  const [bg,setbg]=useState(true);
  const Clear = () => {
    setTotal("");
  }
  const edit = (e) => {
    setTotal(Total.concat(e.target.name));
  }
  const backspace = () => {
    setTotal(Total.slice(0, -1));
  }
  const total = () => {
    setTotal(eval(Total).toString());
  }
  const changebg=()=>{
    setbg(!bg);
  }
  return (
    <div className='body' style={{background:bg ? "rgb(197, 188, 182)":"rgb(57, 71, 100)"}}>
      <div className='head'>
        Calci
      </div>
      <div className='head-left'>
        {
          bg ?
        <span className='fa fa-sun-o' onClick={changebg}></span>
        :<span className='fa fa-moon-o' onClick={changebg}></span>
}
      </div>
      <div className='calci'>
            <form className='p-3'>
              <input type="text" value={Total} style={{ background: "rgb(0,0,0)", color: "white" }} />
            </form>
            <div className='keypad' style={{background:bg ? "rgb(208, 204, 203)":"rgb(34, 44, 67)"}}>
            <button name='9' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>9</button>
              <button name='8' onClick={edit} className="number-btn"style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>8</button>
              <button name='7' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>7</button>
              <button onClick={backspace} className="delete-btn" style={{ background: bg?"rgb(52, 128, 133)":"rgb(99, 112, 151)", color: 'white' }}>DEL</button>
              <button name='6' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>6</button>
              <button name='5' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>5</button>
              <button name='4' onClick={edit} className="number-btn"style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>4</button>
              <button name='+' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>+</button>
              <button name='3' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>3</button>
              <button name='2' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>2</button>
              <button name='1' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>1</button>
              <button name='-' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>&ndash;</button>
              <button name='.' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>.</button>
              <button name='0' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>0</button>
              <button name='*' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>*</button>
              <button name='/' onClick={edit} className="number-btn" style={{ background: bg ? "rgb(229, 228, 224)":"rgb(234, 227, 220)" }}>/</button>
              <button onClick={total} className="equal-btn" style={{ background:bg? "rgb(202, 86, 3)":"rgb(208, 63, 47)", color: 'white' }}>=</button>
              <button onClick={Clear} className="clear-btn"
                style={{ background: bg?"rgb(52, 128, 133)":"rgb(99, 112, 151)", color: 'white' }}>CLEAR</button>
            </div>
      </div>
      <div className='footer'>
        Made by Nikhil Pathak
      </div>
    </div>
  );
}

export default App;
