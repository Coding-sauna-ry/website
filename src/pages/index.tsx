import * as React from "react";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

import "../global-styles.css";

function Index() {
  return (
    <>
      <Heading color="primary" size={2}>
        Hello world
      </Heading>

      <Button color="primary">Button</Button>
      <Button color="secondary">Button</Button>
    </>
  );
}

export default Index;
