import "./style.css";
import Image, { StaticImageData } from "next/image";
interface nrmBtnProps {
  url?: StaticImageData;
  alt?: string;
  color?: string;
  content: string;
}

export default function Btn({ url, alt, color, content }: nrmBtnProps) {
  return (
    <button
      className="btn"
      style={{ color: color || "#fff", borderColor: color || "#fff" }}
    >
      {url && alt && <Image src={url} alt={alt}></Image>}
      <span>{content}</span>
    </button>
  );
}
