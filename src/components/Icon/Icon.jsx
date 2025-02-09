import "./Icon.css";

const Icon = ({ text }) => {
    if (!text) return null; // ✅ Prevents rendering empty elements

    return <div className="icon p">{text}</div>; // ✅ Ensures text renders properly
};

export default Icon;