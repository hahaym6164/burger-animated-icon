# burger-animated-icon

General use example

    `import { AnimateBurger  } from "@hahaym6164/burger-animated-icon";

    `const [state,SetState] = useState(false)`

    `<AnimateBurger classes={state ? "is-active" : ""} color="#fff" style={{ zIndex: "9999" }} num={6} size="small" />`

The property 'num' and 'classes' are mandatory for the use. 'num' is the kind of animation.
'classes' is added to the className of burgers. The animation is triggered when 'is-active' is provided in 'classes' property. The recommend way is to use 'useState' to control the classes.

'color' is controlling the line color of burgers.

'size' is the size of burgers. It only works with burgers-6 right now. if you are using other burgers besides 6, don't use put anything in 'size' or it breaks the animation.
