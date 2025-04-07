import React from "react";

export default function Rule({ container, light }) {
  const hasContainer = container ? "container" : "";
  const isLight = light ? "text-light" : "";
  return (
    <div className={hasContainer}>
      <hr className={isLight} />
    </div>
  );
}
