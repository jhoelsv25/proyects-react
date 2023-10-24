import { useEffect, useRef, useState, useMemo } from "react";
import { AllUser } from "./components/AllUser";
import "./App.css";
import { getAlluser } from "./services/getUser";
export const App = () => {
  const [users, setUsers] = useState([]);
  const [orderBy, setOrderBy] = useState(false);
  const [search, setSearch] = useState("");
  const [color, setColor] = useState(false);
  const originalUser = useRef([]);

  useEffect(() => {
    getAlluser()
      .then((data) => {
        setUsers(data);
        originalUser.current = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const filteredUser = useMemo(() => {
    const lowerCaseSearch = search.toLowerCase();
    return search != null && search.length > 0
      ? users.filter((user) =>
          user.location.country.toLowerCase().includes(lowerCaseSearch)
        )
      : users;
  }, [search, users]);

  const sortedUsers = useMemo(() => {
    let sortedList = [...filteredUser];
    if (orderBy) {
      sortedList.sort((a, b) => {
        if (a.location.country !== b.location.country) {
          return a.location.country.localeCompare(b.location.country);
        } else if (a.name.first !== b.name.first) {
          return a.name.first.localeCompare(b.name.first);
        } else {
          return a.name.last.localeCompare(b.name.last);
        }
      });
    }

    return sortedList;
  }, [filteredUser, orderBy]);

  const handleOrderBy = () => {
    setOrderBy(!orderBy);
  };
  const resetUser = () => {
    setUsers(originalUser.current);
    setOrderBy(false);
    setColor(false);
    setSearch("");
  };
  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== id);
    setUsers(filteredUsers);
  };

  return (
    <>
      <header className="header">
        <h1>Prueba técnica</h1>
        <div className="btn">
          <button onClick={() => setColor(!color)}>
            {color ? "Quitar color" : "Colorear filas"}
          </button>
          <button onClick={handleOrderBy}>ordenar por pais</button>
          <button onClick={resetUser}>Resetear estado</button>
          <input
            type="text"
            placeholder="Buscar por pais"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <AllUser
        users={sortedUsers}
        handleOrderBy={handleOrderBy}
        deleteUser={handleDelete}
        color={color}
      />
    </>
  );
};
