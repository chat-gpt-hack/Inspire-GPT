// ? Can I ask what tf?
// * btw if you will return html (or jsx in react case) you need to have jsx files not js
import { Component } from "react";

const ReactCanvas = require("react-canvas");
const Surface = ReactCanvas.Surface;
const Image = ReactCanvas.Image;
const Text = ReactCanvas.Text;

class MyComponent extends Component {
  render() {
    const surfaceWidth = window.innerWidth;
    const surfaceHeight = window.innerHeight;
    //  return(
    //     <Surface width={surfaceWidth} height={surfaceHeight} left={0} top{0}>
    //       <Text>
    //        Text Data from Your form component
    //       </Text>
    //     </Surface>
    //  )
  }
}

const TextConvert = () => {
  return (
    <div>
      <h1>wat</h1>
    </div>
  );
};

export default TextConvert;
