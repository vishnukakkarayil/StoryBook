import React from 'react'
import Buttons from "../components/button";

export default {
  title: "Button",
  component: Buttons,
  argTypes: {
    Type: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "gray",
        "danger",
        "info",
        "success",
        "warning",
      ],
    },
    Appearance: { control: "select", options: ["filled", "outline", "text"] },
    Size: {
      control: "select",
      options: ["small", "medium", "large", "extraLarge"],
    },
    Anatomy: {
      control: "select",
      options: [
        "Text Button",
        "Text with left icon",
        "Text with right icon",
        "Block Button",
        "Icon in circle",
        "Icon in square",
      ],
    },
    // // argTypes: {
    // alp: {
    //   control: {
    //     type: "select",
    //     options: [
    //       { value: "s", label: "a" },
    //       { value: "m", label: "b" },
    //       { value: "l", label: "c" },
    //     ],
    //   },
    // },
    // // }
  },
};

// export const Red = {
//   args: {
//     children: "Click me",
//     Type: "primary",
//     Appearance: "filled",
//     Size: "small",
//     Anatomy: "Text Button",
//     // alp: "a",
//   },
// };
export const Button = {
  args: {
    Label: "Click me",
    Type: "primary",
    Appearance: "filled",
    Size: "small",
    Anatomy: "Text Button",
    // alp: "a",
  },
};

// Red.args = {
//     // backgroundColor: "red",
//     // label: "press me123",
//     // size: 'md'
//     primary: true,
//     children: "CLick me"
// }