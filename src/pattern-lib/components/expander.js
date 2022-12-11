import React, { useState } from "react";
import "./expander.css";

const Expander = ({ className, expandableChildren, expanderClicker }) => {
  const [isOpen, setIsOpen] = useState(false);
  const paletteClass = isOpen ? "expander_pushdownContent" : "expander";
  return (
    <div className={className}>
      <div className={paletteClass}>{expandableChildren}</div>
      {expanderClicker}
    </div>
  );
};

export default Expander;
