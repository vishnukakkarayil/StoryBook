import PropTypes from "prop-types";
import { ArrowRight } from 'react-bootstrap-icons';
import "./button-style.css";

const Buttons = ({
  label, Type, Appearance, Size, Anatomy, Label, ...args
}) => {
  let classes = "";
  let blockBtn = false;
  let icnInSqrNCircle = false;
  if(Anatomy === "Icon in circle" || Anatomy === "Icon in square") icnInSqrNCircle = true
  if(Anatomy === "Block Button") blockBtn = true

  let types = {
    primary: "ds-primary",
    secondary: "ds-secondary",
    gray: "ds-grey",
    danger: "ds-danger",
    info: "ds-information",
    success: "ds-success",
    warning:"ds-warning"
  };
  let appearances = {
    filled: "ds-btn",
    outline: "ds-btn-outline",
    text: "ds-btn-text",
  };
  let sizes = {
    small: "ds-btn-sm",
    medium: "ds-btn-md",
    large: "ds-btn-lg",
    extraLarge: "ds-btn-xl",
  };
  let Anatomies = {
    "Text Button": "",
    "Text with left icon": "ml10",
    "Text with right icon": "mr10",
    "Block Button": "ds-block-btn",
    "Icon in square": "icon-only",
    "Icon in circle": "icon-only-round",
  };

  classes = types[Type] + " " + appearances[Appearance] + " " + sizes[Size];

  return (
    <button className={`${classes + " "}
     ${icnInSqrNCircle || blockBtn ? Anatomies[Anatomy] : ""}`} {...args}>
        { icnInSqrNCircle && <span ><ArrowRight /></span> }
        {
          Anatomy === "Text with left icon" &&
            <span className={Anatomies[Anatomy]}><ArrowRight /></span>
        }
        {Anatomy !== "Icon in circle" && Label}
        {
          Anatomy === "Text with right icon" &&
            <span className={Anatomies[Anatomy]}><ArrowRight /></span>
        }
    </button>
  );
};

Buttons.propTypes = {
  // label: PropTypes.string,
  // size: PropTypes.oneOf(["sm", "md", "lg"]),
  // Type: PropTypes.oneOf(["primary", "secondary", "gray", "danger", "info"]),
  // Appearance: PropTypes.oneOf(["filled", "outline", "text"]),
  // Size: PropTypes.oneOf(["small", "medium", "large", "extraLarge"]),
  // Anatomy: PropTypes.oneOf([
  //   "Text Button",
  //   "Text with left icon",
  //   "Text with right icon",
  //   "Block Button",
  //   "Icon in circle",
  //   "Icon in square",
  // ]),
};

export default Buttons;
