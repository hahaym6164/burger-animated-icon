import React from "react";
import "./Animated-burger.css";
type Size = "small" | "medium" | "big";

interface BurgerIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size;
  num: number;
  color?: string;
  classes: string;
}

function HamburgerIcon(props: BurgerIconProps) {
  const { num, classes, color = "white" } = props;

  const size: Size = props.size ?? "big";
  const lineSize = {
    small: {
      width: "30px",
      height: "2px",
    },
    medium: {
      width: "40px",
      height: "3px",
    },
    big: {
      width: "50px",
      height: "5px",
    },
  };
  const styleBySize = {
    6: {
      medium: {
        transform: "-7px",
      },
      small: {
        transform: "-7px",
      },
      big: {
        transform: "-13px",
      },
    },
  };

  return (
    <>
      <style>
        {`          
          #hamburger-6.is-active .line:nth-child(3){
            -webkit-transform: translateY(-13px) rotate(90deg);
            -ms-transform: translateY(-13px) rotate(90deg);
            -o-transform: translateY(-13px) rotate(90deg);
            transform: translateY(${styleBySize[6][size].transform}) rotate(90deg);
          }
          `}
      </style>
      <div
        {...props}
        className={`hamburger ${classes}`}
        id={`hamburger-${num}`}
      >
        <span
          className="line"
          style={{
            backgroundColor: color,
            width: lineSize[size].width,
            height: lineSize[size].height,
          }}
        ></span>
        <span
          className="line"
          style={{
            backgroundColor: color,
            width: lineSize[size].width,
            height: lineSize[size].height,
          }}
        ></span>
        <span
          className="line"
          style={{
            backgroundColor: color,
            width: lineSize[size].width,
            height: lineSize[size].height,
          }}
        ></span>
      </div>
    </>
  );
}

export default HamburgerIcon;
