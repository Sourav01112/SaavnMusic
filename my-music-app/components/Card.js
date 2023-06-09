import React from "react";
import { useUserContext } from "../context/userContext";
import Image from "next/image";

const Card = ({ data }) => {
  const { songNum, setSongNum } = useUserContext();
  return (
    <>
      <div data-aos="zoom-in">
        <Image
          onClick={() => setSongNum(data.id - 1)}
          className=" hover:shadow-2xl transition-all hover:scale-105 shadow-xl w-[150px] md:w-36 active:scale-95 cursor-pointer rounded-xl sm:w-40"
          src={data.imgSrc}
          alt=""
          width={125}
          height={125}
        />
        <h1 className="   drop-shadow-xl font-semibold">{data.title}</h1>
      </div>
    </>
  );
};

export default Card;
