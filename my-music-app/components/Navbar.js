import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AiFillHome } from "react-icons/ai";
import { CgMusic } from "react-icons/cg";
import { MdLibraryMusic } from "react-icons/md";
import { RiSearchFill, RiSettings4Fill } from "react-icons/ri";
import { BsBoxArrowLeft, BsFileMusicFill } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import { GrFormClose } from "react-icons/gr";
import { useUserContext } from "../context/userContext";
import { useRouter } from "next/router";
import Data from "../data.json";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [alert, setAlert] = useState(false);
  const { isMenu, setMenu, page, setPage, songNum, setSongNum } =
    useUserContext();
  useEffect(() => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [songNum]);
  const router = useRouter();
  return <></>;
};

export default Navbar;
