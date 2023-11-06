async function users() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error(`fetch Error ${res.status}`);
    const users = await res.json();
    console.log(users);
  } catch (err) {
    console.error('failed', err);
  }
}

async function pokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/25');
    if (!res.ok) throw new Error(`fetch Error ${res.status}`);
    const pikachu = await res.json();
    console.log(pikachu);
  } catch (err) {
    console.error('failed', err);
  }
}

pokemon();
users();
