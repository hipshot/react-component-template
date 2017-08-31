import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span aria-label="smile" role="img">
        😀
      </span>{" "}
      <span aria-label="sunglasses" role="img">
        😎
      </span>{" "}
      <span aria-label="thumbs up" role="img">
        👍
      </span>{" "}
      <span aria-label="100" role="img">
        💯
      </span>
    </Button>
  ));
