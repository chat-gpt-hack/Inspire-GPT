import { useEffect, useRef } from "react";

export default function ImgCanvas({ imageSrc, text }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Draw the text on the canvas
      const lineHeight = 30; // Customize line height
      const maxWidth = canvas.width - 20; // leave some padding
      const words = text.split(' ');
      let line = '';
      let lines = [];
      words.forEach(word => {
        const testLine = line + ' ' + word;
        const testWidth = ctx.measureText(testLine).width;
        if (testWidth > maxWidth) {
          lines.push(line.trim());
          line = word + ' ';
        } else {
          line = testLine;
        }
      });
      lines.push(line.trim());

      ctx.font = "bold 24px Arial";
      ctx.fillStyle = "white";
      const textHeight = lineHeight * lines.length;
      const ypos = (canvas.height - textHeight) / 2 + lineHeight; // center vertically
      const xpos = canvas.width / 2;
      lines.forEach((line, index) => {
        const lineWidth = ctx.measureText(line).width;
        ctx.fillText(line, xpos - (lineWidth / 2), ypos + (index * lineHeight));
      });
    };
  }, [imageSrc, text]);

  return <canvas ref={canvasRef} width={640} height={480} />;
}
