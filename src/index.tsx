import * as esbuild from 'esbuild-wasm';
import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';


const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const App = () => {

  const ref = useRef<any>();

  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
    });

  };

  useEffect(() => {
    startService();
  }, []);

  const handleClick = async () => {
    if (!ref.current) {
      return;
    } 
   
    const result = await ref.current.build({
      entryPoints: ['index.js'], 
      bundle: true, 
      write: false, 
      plugins: [unpkgPathPlugin(), 
        fetchPlugin(text)
      ], 
      define: {
        'process.env.NODE_ENV': '"production"', 
        global: 'window'
      }
    });

    // console.log(result);

    setCode(result.outputFiles[0].text);

    try {
      eval(result.outputFiles[0].text);
    }
    catch (err) {
      console.log('errror: '+ err)
    }
    

  };

  return <div>
    <textarea value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
    <div>
      <button onClick={handleClick}>Submit</button>
    </div>
    <pre>{code}</pre>
    <iframe src="/test.html" sandbox="allow-same-origin"/>
  </div>;
}

root.render(<App />);