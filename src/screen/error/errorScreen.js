import { Link } from "react-router-dom";
import LinkPage from "../nav/link";

const RoutNotfounnd = () => {
  return (
    <div className="error">
      <h1 className="txt">404</h1>
      <p className="txt-p">Page not found</p>
    </div>
  );
};
export default RoutNotfounnd;
