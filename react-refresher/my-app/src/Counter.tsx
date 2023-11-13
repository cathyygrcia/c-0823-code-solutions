import { CSSProperties, useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(4);
  return (
    <div style={counterStyle}>
      <Button text="Down" onTap={() => setCount(count - 1)} />
      <Label value={count} />
      <Button text="Up" onTap={() => setCount(count + 1)} />
    </div>
  );
}
type ButtonProps = {
  text: string;
  onTap: () => void;
};
function Button({ text, onTap }: ButtonProps) {
  return <button onClick={onTap}>{text}</button>;
}
type LabelProps = {
  value: number;
};
function Label({ value }: LabelProps) {
  return <span>{value}</span>;
}
const counterStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  gap: '1rem',
};
