import * as React from "react";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

import "../global-styles.css";

function Index() {
  return (
    <>
      <Heading color="primary" size="2">
        Hello world
      </Heading>

      <Button color="primary">Button</Button>
      <Button color="secondary">Button</Button>

      <Paragraph color="text-black" size="small" className="text-red-500">
        Lorem laborum sit id consequat dolore aliqua minim eu do. Quis voluptate
        ut proident ea nostrud non sunt veniam esse et culpa cillum ex enim. Qui
        voluptate non id proident dolore occaecat ea eu ea consequat ipsum.
      </Paragraph>
    </>
  );
}

export default Index;
