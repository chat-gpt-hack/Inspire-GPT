import { useEffect } from "react";

export default function CloudyImg({ imgUrl, text }) {
  const [cloudImg, setCloudImg] = useState("");

  useEffect(() => {
    const text = "Hello, world!";

    fetch();
    setCloudImg(
      `https://res.cloudinary.com/your-cloud-name/image/upload/l_text:Arial_60_bold:${encodeURIComponent(
        text
      )},co_white,g_north,y_50/${imgUrl}`
    );
  }, [imgUrl]);

  return <img src={cloudinaryUrl} alt="Image with text" />;
}
