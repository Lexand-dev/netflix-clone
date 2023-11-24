import useBillboard from "@/hooks/useBillboard";

import { AiOutlineInfoCircle } from "react-icons/ai";

const Billboard = () => {
  const { movie } = useBillboard();

  return ( 
    <div className="relative h-[56.25vw">
      <video
        className="
          w-full
          h-[56.25vw]
          object-cover
          brightness-[60%]
        "
        autoPlay
        muted
        loop
        poster={movie?.thumbnailUrl} 
        src={movie?.videoUrl}>

      </video>
      <div className="absolute top[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="
          text-white 
            text-xl md:text-5xl
            h-full w-[50%] 
            lg:text-6xl 
            font-bold
            drop-shadow-xl
          ">
          {movie?.title}
        </p>
        <p className="
          text-white 
          text-[8px] md:text-lg
          w-[90%] 
          md:w-[80%] lg:w-[50%]
          mt-3
          md:mt-8
          drop-shadow-xl
        ">
          {movie?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            className="
              bg-white 
              text-white 
              bg-opacity-30
              rounded-md
              py-1 md:py-2
              px-2 md:px-4
              w-auto
              text-sm md:text-lg
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
   );
}
 
export default Billboard;