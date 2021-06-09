function nextId() {
    const users = readAll();

    const ids = users.map((users) => users.id);

    const maxId = Math.max(...ids);

    return maxId + 1;
}

function load(newUsers) {
  localStorage.setItem('users-app:users', JSON.stringify(newUsers));
}

function create(usuario) {
  usuario = { id: nextId(), ...usuario };

  const users = readAll();

  const newusers = [...users, usuario];

  load(newusers);

  return usuario;
}

function readAll() {
  return JSON.parse(localStorage.getItem('users-app:users'));
}

function read(id) {
  const users = readAll();

  const usuario = users.find((usuario) => usuario.id === id);

  return usuario;
}

function update(id, usuario) {
  const users = readAll();

  const index = users.findIndex((usuario) => usuario.id === id);

  if (index >= 0) {
    users[index] = { id, ...usuario };
  }

  load(users);

  return usuario;
}

function destroy(id) {
  const users = readAll();

  const index = users.findIndex((usuario) => usuario.id === id);

  if (index >= 0) {
      users.splice(index, 1);
  }

  load(users);
}

export default { load, create, readAll, read, update, destroy };
