export type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  const pokemon = pokedex.map(({ name, number }) => (
    <li key={number}>{name}</li>
  ));
  return <ul>{pokemon}</ul>;
}
