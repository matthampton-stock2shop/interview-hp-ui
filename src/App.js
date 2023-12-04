import {useEffect, useState} from "react";

function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  return (
    <div >
      <p>
        <pre><code>{JSON.stringify(data, undefined, 2)}</code></pre>
      </p>
    </div>
  );
}

export default App;
