import Name from "./Name";

function FullName() {
  const firstCharacters = ["K", "h", "a", "l", "e", "e", "d"];
  const secondCharacters = ["O", "p", "e", "l", "o", "y", "e", "r", "u", "."];
  return (
    <div className="welcome-texts flex gap-8 flex-wrap items-center">
      <Name characters={firstCharacters} />
      <Name characters={secondCharacters} />
    </div>
  );
}

export default FullName;
