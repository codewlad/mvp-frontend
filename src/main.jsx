
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/users")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Fullstack funcionando 🚀</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
