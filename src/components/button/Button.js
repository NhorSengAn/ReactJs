import styles from "./Botton.module.css";
const Botton = ({ title, textColor, bgColor, onClick }) => {
  return (
    <div>
      <div>
        <button
          className={{
            color: textColor,
            backgroundColor: bgColor,
          }}
          onClick={() => onClick(10)}
        >
          {title}
        </button>
      </div>
    </div>
  );
};
export default Botton;
