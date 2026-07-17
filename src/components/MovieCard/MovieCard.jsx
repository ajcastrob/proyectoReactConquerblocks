import { useState } from "react";
import notMovieFound from "../../assets/image-not-moviefound.png";

const FALLBACK_POSTER = notMovieFound;

export const MovieCard = ({
  onToggleFavorite,
  id,
  title,
  year,
  image,
  isFavorite,
}) => {
  const [imgSrc, setImgSrc] = useState(image || FALLBACK_POSTER);

  const handleToggleFavorite = () => {
    onToggleFavorite({ id, title, year, image });
  };

  return (
    <article className="relative aspect-9/16 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <img
        src={imgSrc}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setImgSrc(FALLBACK_POSTER)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-[#353535]/60 px-2 py-1 backdrop-blur-md">
        <button
          onClick={handleToggleFavorite}
          className="p-1 hover:text-red-50"
        >
          <i
            className={`${isFavorite ? "ri-heart-fill" : "ri-heart-line"} text-xs leading-none text-red-50`}
          ></i>
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
        <span className="font-['Inter'] text-xs font-medium leading-none text-white/80">
          {year}
        </span>
        <h3 className="font-display text-xl font-semibold leading-tight text-[#E5E2E5]">
          {title}
        </h3>
      </div>
    </article>
  );
};
