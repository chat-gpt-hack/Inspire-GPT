import { useEffect, useRef } from "react";

export default function ImgCanvas({ imageSrc, text }) {
  const canvasRef = useRef();

  useEffect(
    // first param must be a cb func
    () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Draw the text on the canvas
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = "white";
        // calculate the middle in base of the text width 24 since every letter is 24px
        const textLen = text.length * 24;
        const ypos = 1 || canvas.width;
        console.log(ypos);
        const xpos = canvas.height / 2;
        ctx.fillText(text.repeat(2), ypos, xpos);
      };
    },
    // function that runs everytime one of these params change
    [imageSrc, text]
  );

  return <canvas ref={canvasRef} width={640} height={480} />;
}
