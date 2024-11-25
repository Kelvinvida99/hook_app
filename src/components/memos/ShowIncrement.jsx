import PropTypes from "prop-types";
import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("me volvie a renderizar");
  return <button onClick={() => increment(5)}>Click me</button>;
});

ShowIncrement.displayName = "ShowIncrement";

ShowIncrement.propTypes = {
  increment: PropTypes.func,
};
