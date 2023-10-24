import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/v1/products?sku=2")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  return (
    <div className="App">
      <p>
        <pre><code>{JSON.stringify(data, undefined, 2)}</code></pre>
      </p>
    </div>
  );
}

export default App;
