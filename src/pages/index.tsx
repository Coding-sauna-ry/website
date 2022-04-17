import * as React from "react";
import Heading from "../atoms/Heading";

import "../global-styles.css";

function Index() {
  return (
    <>
      <Heading color="secondary" size={2}>
        Hello world
      </Heading>

      <h1 className="text-yellow-400 text-9xl">Hello</h1>
    </>
  );
}

export default Index;
