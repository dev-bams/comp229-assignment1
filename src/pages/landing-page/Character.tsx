import type { CharacterProp } from "../../types/types";

function Character({ alphabet }: CharacterProp) {
  return (
    <h1 className="text-9xl font-bold inline  text-second-accent hover:text-first-accent selection:text-first-accent transition duration-300 hover:-translate-y-5 max-md:text-7xl max-sm:text-5xl">
      {alphabet}
    </h1>
  );
}

export default Character;
