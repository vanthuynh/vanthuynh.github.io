import { AnySchema } from "ajv";
import React from "react";
import ProjectList from "./ProjectList";

interface CallbackProps {
    filterItem: any;
    setItem: any;
    menuItems: any;
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent:"center",
  } as React.CSSProperties,
  butt: {
    fontColor:"red",
    fontStyle:"bold",
    padding:"0 2em",
    margin:"0 0.5em",
  } as React.CSSProperties,
};

const Buttons = ({ filterItem, setItem, menuItems }: CallbackProps) => {
  return (
    <>
      <div style={styles.wrapper}>
        {menuItems.map((Val, id) => {
          return (
            <button style={styles.butt} onClick={() => filterItem(Val)} key={id}>
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(ProjectList)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;