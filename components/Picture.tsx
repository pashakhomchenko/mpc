import Image, { StaticImageData } from "next/image";

interface PictureProps {
  src: StaticImageData;
  title: string;
}

const Picture = ({ src, title }: PictureProps) => {
  return (
    <div className="flex flex-col break-words my-3 w-fit">
      <Image src={src} alt={title} />
      {title}
    </div>
  );
};

export default Picture;
