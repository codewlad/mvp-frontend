import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar usuários");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Erro: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
