import React from "react";

import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  return (
    <ul className="namelist">
      <ChildComponent name="Kelley" />
      <ChildComponent name="Heleen" />
      <ChildComponent name="Elsie" />
    </ul>
  );
}
