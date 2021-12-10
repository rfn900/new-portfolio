import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { BsFillPlayFill } from 'react-icons/bs'
import { BsStopCircle } from 'react-icons/bs'

export const LaptopUI = ({ gif, screen, alt }) => {
  const [gifPlay, setGifPlay] = useState(false)
  return (
    <motion.div className="relative w-[300px] h-[210px] md:w-[484px] md:h-[320px] pb-2 px-2 pt-5 rounded-2xl bg-themeGray-darker">
      <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-themeGray-medium"></div>
      <div
        onClick={() => setGifPlay((gPlay) => !gPlay)}
        className="group cursor-pointer w-full h-full bg-themeGray-dark overflow-x-hidden overflow-y-scroll relative rounded-lg"
      >
        <div>
          {gifPlay ? (
            <Image
              width={641}
              height={400}
              objectFit="cover"
              src={gif}
              alt={alt}
              className="absolute inset-0"
            />
          ) : (
            <Image
              width={600}
              height={400}
              src={screen}
              alt={alt}
              className="absolute inset-0"
            />
          )}
        </div>
        <div className="absolute top-1/2 flex-center left-1/2 transform p-1 w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2">
          {gifPlay ? (
            <BsStopCircle className="w-2/3 h-2/3 text-yellow-400 hidden duration-500 transition opacity-20 group-hover:block" />
          ) : (
            <BsFillPlayFill className="w-full filter drop-shadow-xl h-full transition transform group-hover:scale-125 text-yellow-400" />
          )}
        </div>
      </div>
      <div className="absolute -bottom-4 w-[115%] lg:w-[120%] h-5 bg-[#616169] rounded-b-xl shadow-md transform -translate-x-1/2 left-1/2">
        <div className="absolute h-1/2 w-20 rounded-b-lg bg-themeGray-mediumLight left-1/2 transform -translate-x-1/2"></div>
      </div>
    </motion.div>
  )
}
