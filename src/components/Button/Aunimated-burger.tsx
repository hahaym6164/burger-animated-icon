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
  console.log(props, "burger props");

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
          .hamburger .line{
            width: ${lineSize[size].width};
            height:  ${lineSize[size].height};
            background-color: #ecf0f1;
            display: block;
            margin: 8px auto;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }
          
          
          /* ONE */
          
          #hamburger-1.is-active .line:nth-child(2){
            opacity: 0;
          }
          
          #hamburger-1.is-active .line:nth-child(1){
            -webkit-transform: translateY(13px) rotate(45deg);
            -ms-transform: translateY(13px) rotate(45deg);
            -o-transform: translateY(13px) rotate(45deg);
            transform: translateY(13px) rotate(45deg);
          }
          
          #hamburger-1.is-active .line:nth-child(3){
            -webkit-transform: translateY(-13px) rotate(-45deg);
            -ms-transform: translateY(-13px) rotate(-45deg);
            -o-transform: translateY(-13px) rotate(-45deg);
            transform: translateY(-13px) rotate(-45deg);
          }
          
          /* TWO */
          
          #hamburger-2.is-active .line:nth-child(1){
            -webkit-transform: translateY(13px);
            -ms-transform: translateY(13px);
            -o-transform: translateY(13px);
            transform: translateY(13px);
          }
          
          #hamburger-2.is-active .line:nth-child(3){
            -webkit-transform: translateY(-13px);
            -ms-transform: translateY(-13px);
            -o-transform: translateY(-13px);
            transform: translateY(-13px);
          }
          
          /* THREE */
          
          #hamburger-3.is-active .line:nth-child(1),
          #hamburger-3.is-active .line:nth-child(3){
            width: 40px;
          }
          
          #hamburger-3.is-active .line:nth-child(1){
            -webkit-transform: translateX(-10px) rotate(-45deg);
            -ms-transform: translateX(-10px) rotate(-45deg);
            -o-transform: translateX(-10px) rotate(-45deg);
            transform: translateX(-10px) rotate(-45deg);
          }
          
          #hamburger-3.is-active .line:nth-child(3){
            -webkit-transform: translateX(-10px) rotate(45deg);
            -ms-transform: translateX(-10px) rotate(45deg);
            -o-transform: translateX(-10px) rotate(45deg);
            transform: translateX(-10px) rotate(45deg);
          }
          
          /* FOUR */
          
          #hamburger-4.is-active .line:nth-child(1),
          #hamburger-4.is-active .line:nth-child(3){
            width: 40px;
          }
          
          #hamburger-4.is-active .line:nth-child(1){
            -webkit-transform: translateX(10px) rotate(45deg);
            -ms-transform: translateX(10px) rotate(45deg);
            -o-transform: translateX(10px) rotate(45deg);
            transform: translateX(10px) rotate(45deg);
          }
          
          #hamburger-4.is-active .line:nth-child(3){
            -webkit-transform: translateX(10px) rotate(-45deg);
            -ms-transform: translateX(10px) rotate(-45deg);
            -o-transform: translateX(10px) rotate(-45deg);
            transform: translateX(10px) rotate(-45deg);
          }
          
          /* FIVE */
          
          #hamburger-5.is-active{
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(90deg);
          }
          
          #hamburger-5.is-active .line:nth-child(2){
            -webkit-transition: none;
            -o-transition: none;
            transition: none;
          }
          
          #hamburger-5 .line:nth-child(2){
            -webkit-transition-delay: 0.3s;
            -o-transition-delay: 0.3s;
            transition-delay: 0.3s;
          }
          
          
          #hamburger-5.is-active .line:nth-child(2){
            opacity: 0;
          }
          
          #hamburger-5.is-active .line:nth-child(1),
          #hamburger-5.is-active .line:nth-child(3){
            width: 35px;
            -webkit-transform-origin: right;
            -moz-transform-origin: right;
            -ms-transform-origin: right;
            -o-transform-origin: right;
            transform-origin: right;
          }
          
          #hamburger-5.is-active .line:nth-child(1){
            -webkit-transform: translateY(15px) rotate(45deg);
            -ms-transform: translateY(15px) rotate(45deg);
            -o-transform: translateY(15px) rotate(45deg);
            transform: translateY(15px) rotate(45deg);
          }
          
          #hamburger-5.is-active .line:nth-child(3){
            -webkit-transform: translateY(-15px) rotate(-45deg);
            -ms-transform: translateY(-15px) rotate(-45deg);
            -o-transform: translateY(-15px) rotate(-45deg);
            transform: translateY(-15px) rotate(-45deg);
          }
          
          /* SIX */
          
          #hamburger-6.is-active{
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            -webkit-transition-delay: 0.6s;
            -o-transition-delay: 0.6s;
            transition-delay: 0.6s;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          
          #hamburger-6.is-active .line:nth-child(2){
            width: 0px;
          }
          
          #hamburger-6.is-active .line:nth-child(1),
          #hamburger-6.is-active .line:nth-child(3){
            -webkit-transition-delay: 0.3s;
            -o-transition-delay: 0.3s;
            transition-delay: 0.3s;
          }
          
          #hamburger-6.is-active .line:nth-child(1){
            -webkit-transform: translateY(13px);
            -ms-transform: translateY(13px);
            -o-transform: translateY(13px);
            transform: translateY(13px);
          }
          
          #hamburger-6.is-active .line:nth-child(3){
            -webkit-transform: translateY(-13px) rotate(90deg);
            -ms-transform: translateY(-13px) rotate(90deg);
            -o-transform: translateY(-13px) rotate(90deg);
            transform: translateY(${styleBySize[6][size].transform}) rotate(90deg);
          }
          
          /* SEVEN */
          
          #hamburger-7.is-active .line:nth-child(1){
            width: 30px;
          }
          
          #hamburger-7.is-active .line:nth-child(2){
            width: 40px;
          }
          
          #hamburger-7.is-active .line{
            -webkit-transform: rotate(30deg);
            -ms-transform: rotate(30deg);
            -o-transform: rotate(30deg);
            transform: rotate(30deg);
          }
          
          /* EIGHT */
          
          #hamburger-8.is-active .line:nth-child(2){
            opacity: 0;
          }
          
          #hamburger-8.is-active .line:nth-child(1){
            -webkit-transform: translateY(13px);
            -ms-transform: translateY(13px);
            -o-transform: translateY(13px);
            transform: translateY(13px);
          }
          
          #hamburger-8.is-active .line:nth-child(3){
            -webkit-transform: translateY(-13px) rotate(90deg);
            -ms-transform: translateY(-13px) rotate(90deg);
            -o-transform: translateY(-13px) rotate(90deg);
            transform: translateY(-13px) rotate(90deg);
          }
          
          /* NINE */
          
          #hamburger-9{
            position: relative;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }
          
          #hamburger-9.is-active{
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          
          #hamburger-9:before{
            content: "";
            position: absolute;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            width: 70px;
            height: 70px;
            border: 5px solid transparent;
            top: calc(50% - 35px);
            left: calc(50% - 35px);
            border-radius: 100%;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }
          
          #hamburger-9.is-active:before{
            border: 5px solid #ecf0f1;
          }
          
          #hamburger-9.is-active .line{
            width: 35px;
          }
          
          #hamburger-9.is-active .line:nth-child(2){
            opacity: 0;
          }
          
          #hamburger-9.is-active .line:nth-child(1){
            -webkit-transform: translateY(13px);
            -ms-transform: translateY(13px);
            -o-transform: translateY(13px);
            transform: translateY(13px);
          }
          
          #hamburger-9.is-active .line:nth-child(3){
            -webkit-transform: translateY(-13px) rotate(90deg);
            -ms-transform: translateY(-13px) rotate(90deg);
            -o-transform: translateY(-13px) rotate(90deg);
            transform: translateY(-13px) rotate(90deg);
          }
          
          /* TEN */
          
          #hamburger-10{
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }
          
          #hamburger-10.is-active{
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(90deg);
          }
          
          #hamburger-10.is-active .line:nth-child(1){
            width: 30px
          }
          
          #hamburger-10.is-active .line:nth-child(2){
            width: 40px
          }
          
          /* ELEVEN */
          
          #hamburger-11{
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }
          
          #hamburger-11.is-active{
            animation: smallbig 0.6s forwards;
          }
          
          @keyframes smallbig{
            0%, 100%{
              -webkit-transform: scale(1);
              -ms-transform: scale(1);
              -o-transform: scale(1);
              transform: scale(1);
            }
          
            50%{
              -webkit-transform: scale(0);
              -ms-transform: scale(0);
              -o-transform: scale(0);
              transform: scale(0);
            }
          }
          
          #hamburger-11.is-active .line:nth-child(1),
          #hamburger-11.is-active .line:nth-child(2),
          #hamburger-11.is-active .line:nth-child(3){
            -webkit-transition-delay: 0.2s;
            -o-transition-delay: 0.2s;
            transition-delay: 0.2s;
          }
          
          #hamburger-11.is-active .line:nth-child(2){
            opacity: 0;
          }
          
          #hamburger-11.is-active .line:nth-child(1){
            -webkit-transform: translateY(13px) rotate(45deg);
            -ms-transform: translateY(13px) rotate(45deg);
            -o-transform: translateY(13px) rotate(45deg);
            transform: translateY(13px) rotate(45deg);
          }
          
          #hamburger-11.is-active .line:nth-child(3){
            -webkit-transform: translateY(-13px) rotate(-45deg);
            -ms-transform: translateY(-13px) rotate(-45deg);
            -o-transform: translateY(-13px) rotate(-45deg);
            transform: translateY(-13px) rotate(-45deg);
          }
          
          /* TWELVE */
          
          #hamburger-12.is-active .line:nth-child(1){
            opacity: 0;
            -webkit-transform: translateX(-100%);
            -ms-transform: translateX(-100%);
            -o-transform: translateX(-100%);
            transform: translateX(-100%);
          }
          
          #hamburger-12.is-active .line:nth-child(3){
            opacity: 0;
            -webkit-transform: translateX(100%);
            -ms-transform: translateX(100%);
            -o-transform: translateX(100%);
            transform: translateX(100%);
          }
          `}
      </style>
      <div
        {...props}
        className={`hamburger ${classes}`}
        id={`hamburger-${num}`}
      >
        <span className="line" style={{ backgroundColor: color }}></span>
        <span className="line" style={{ backgroundColor: color }}></span>
        <span className="line" style={{ backgroundColor: color }}></span>
      </div>
    </>
  );
}

export default HamburgerIcon;