import TerminalUI from "./TerminalUI";

const Skills = ({ id }) => {
  return (
    <div id={id} className="mt-36 xs:mt-12 flex-center flex-col section">
      <h2 className="text-4xl font-bold font-mono text-center">
        Things I can do
      </h2>
      <TerminalUI />
    </div>
  );
};

export default Skills;
