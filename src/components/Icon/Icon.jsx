import "./Icon.css";

const Icon = ({ text }) => {
  if (!text) return null;

  return <div className="icon p">{text}</div>;
};

export default Icon;
