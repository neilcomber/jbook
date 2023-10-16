import * as esbuild from 'esbuild-wasm';
import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client';


const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const App = () => {

  const ref = useRef<any>();

  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    });

  };

  useEffect(() => {
    startService();
  }, []);

  const handleClick = async () => {
    if (!ref.current) {
      return;
    }
   
    const result = await ref.current.transform(text, {
      loader: 'jsx',
      target: 'es2015'
    });

    setCode(result.code);

  };

  return <div>
    <textarea value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
    <div>
      <button onClick={handleClick}>Submit</button>
    </div>
    <pre>{code}</pre>
  </div>;
}

root.render(<App />);