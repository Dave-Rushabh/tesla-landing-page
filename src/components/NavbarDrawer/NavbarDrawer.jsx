import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
} from "@chakra-ui/react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { NAVBAR_OPTIONS } from "../../constants/navbar";

const NavbarDrawer = ({ isOpen, onClose, btnRef }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  const getMenuOptionsByWindowSize = () =>
    windowSize <= 1024 ? NAVBAR_OPTIONS : NAVBAR_OPTIONS.slice(6);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="flex items-center h-8 px-4 justify-start my-4">
            <div className="w-12 px-2 py-1 rounded-md bg-slate-200 hover:cursor-pointer">
              <MdOutlineKeyboardBackspace
                onClick={onClose}
                size={"1.8rem"}
                color={"#1d3557"}
              />
            </div>
          </div>
          <DrawerHeader className="text-app_primary_blue">
            Explore the world of Tesla
          </DrawerHeader>

          <DrawerBody>
            {getMenuOptionsByWindowSize().map((option) => (
              <div
                key={option.id}
                className="my-4 p-2 hover:cursor-pointer text-md hover:bg-slate-100 text-app_primary_blue text-lg"
              >
                {option.option}
              </div>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" onClick={onClose}>
              Go Back
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
