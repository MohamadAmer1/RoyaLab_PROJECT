import { useLocation } from "react-router-dom";
import "./PageTransition.css";

export default function PageTransition({ children }) {
  const location = useLocation();

  function getTransitionClass() {
    if (location.pathname === "/cards" || location.pathname === "/buildyourdeck") {
      return "left-to-right-transition";
    }
    return "";
  }

  return (
    <div className="page-transition-wrapper">
      <div
        key={location.pathname}
        className={`page-transition ${getTransitionClass()}`}
      >
        {children}
      </div>
    </div>
  );
}