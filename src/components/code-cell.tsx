
import { useState } from 'react'
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizable from './resizable';


const CodeCell = () => {

  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  
  const handleClick = async () => {
    const output = await bundle(text); 

    setCode(output);

  };

  return
  (
    <Resizable direction='vertical'>
      <div>
        <CodeEditor initialValue="const a = 1;"
          onChange={(value) => setText(value)}
        />
    
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
        <Preview code={code} />
      </div>
    </Resizable>
  );
}


export default CodeCell;