import { useState, type FormEvent } from 'react';

type Props = {
  name?: string;
  pwd?: string;
};

export function RegistrationFormControlled({ pwd, name }: Props) {
  const [username, setUsername] = useState(name);
  const [password, setPassword] = useState(pwd);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.currentTarget);
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form);
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
