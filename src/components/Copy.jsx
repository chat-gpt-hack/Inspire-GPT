const img = new Image();
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

document.getElementById("btn").addEventListener("click", () => {
  copyToClipboard("your-image.jpg");
});

function writeToCanvas(src) {
  return new Promise((res, rej) => {
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
}

async function copyToClipboard(src) {
  const image = await writeToCanvas(src);
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
}

const Copy = () => {
  return (
    <>
      <label for="url">Enter image URL: </label>
      <input id="url" type="text" />
      <button id="btn">Copy image!</button>
    </>
  );
};

export default Copy;
