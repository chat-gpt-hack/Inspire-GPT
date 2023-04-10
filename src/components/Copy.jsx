import { useRef, useCallback } from "react";

const writeToCanvas = (src, canvas) => {
  return new Promise((res, rej) => {
    const img = new Image();
    const ctx = canvas.getContext("2d");
    img.src = src;
    img.onload = function () {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        res(blob);
      }, "image/png");
    };
  });
};

const Copy = () => {
  const inputRef = useRef(null);
  const canvasRef = useRef(null);

  const handleButtonClick = useCallback(async () => {
    if (!inputRef.current || !canvasRef.current) return;
    const src = inputRef.current.value;
    const image = await writeToCanvas(src, canvasRef.current);
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          [image.type]: image,
        }),
      ]);

      console.log("Success");
    } catch (e) {
      console.log("Copy failed: " + e);
    }
  }, [inputRef, canvasRef]);

  return (
    <div>
      <label htmlFor="url">Enter image URL: </label>
      <input ref={inputRef} id="url" type="text" />
      <br />
      <button onClick={handleButtonClick}>Copy image!</button>
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default Copy;
