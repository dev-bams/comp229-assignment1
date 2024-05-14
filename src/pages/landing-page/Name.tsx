import type { NameProp } from "../../types/types";
import Character from "./Character";
function Name({ characters }: NameProp) {
  return (
    <div className=" flex gap-[0.1rem] ">
      {characters.map((character, key) => {
        return <Character alphabet={character} key={key} />;
      })}
    </div>
  );
}

export default Name;
