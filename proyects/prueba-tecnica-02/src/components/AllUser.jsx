export const AllUser = ({ users, handleOrderBy, color, deleteUser }) => {
  return (
    <table style={{ width: "100%", marginTop: "2rem" }}>
      <thead>
        <tr
          style={{
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
          }}
        >
          <td>Foto</td>
          <td>Nombre</td>
          <td>Apellido</td>
          <td>
            <button onClick={handleOrderBy}>País</button>
          </td>

          <td>Acciones</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr
              key={index}
              style={{
                fontWeight: "normal",
                width: "100%",
                textAlign: "center",
                backgroundColor: color && index % 2 != 0 ? "#e7ecef" : "white",
              }}
            >
              <td>
                <img
                  src={user.picture.thumbnail}
                  loading="lazy"
                  style={{ borderRadius: "50%" }}
                  alt={user.gender}
                />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => deleteUser(user.login.uuid)}>
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <th></th>
        </tr>
      </tbody>
    </table>
  );
};
