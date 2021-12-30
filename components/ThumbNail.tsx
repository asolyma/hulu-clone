import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

const ThumbNail: React.FC<{
  src?: string;
  title?: string;
  overview?: string;
  voteCount?: number;
  releaseDate?: string;
}> = ({ src, title, overview, releaseDate, voteCount }) => {
  return (
    <div className="px-5 group cursor-pointer  duration-200 ease-in transition sm:hover:scale-105 hover:z-50">
      <Image
        alt=""
        layout="responsive"
        height={1080}
        width={1920}
        objectFit="cover"
        src={src || ""} //we need a fallback image
      />
      <div className="p-2">
        <p className="truncate max-w-md text-gray-400">{overview}</p>
        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {releaseDate}
          <ThumbUpIcon className="h-5 pl-5" />
          {voteCount}
        </p>
      </div>
    </div>
  );
};

export default ThumbNail;
