import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { loading, page, numberPages, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button disabled={loading} onClick={() => handlePage("decrease")}>
        prev
      </button>
      <p>
        {page + 1} of {numberPages}
      </p>
      <button disabled={loading} onClick={() => handlePage("increase")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
