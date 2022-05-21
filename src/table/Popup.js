import React from "react";

function Popup(props) {
  return props.trigger ? (
    <div>
      <button onClick={() => props.setTrigger(false)}>Onclose</button>
      {props.children}
    </div>
  ) : (
    "  "
  );
}
export default Popup;
