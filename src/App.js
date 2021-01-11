import React from "react";
import "./styles.css";
import FormUi from "./Components";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="appHeaderFooter">
        <a href="#" className="headerFooterTitle">
          موقع تشفير عروض البيع و الشراء
        </a>
      </div>
      <FormUi />
      <div className="appHeaderFooter">
        <a href="#"  className="headerFooterTitle">github repo</a>
      </div>
    </div>
  );
}
