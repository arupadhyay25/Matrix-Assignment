import React, { useState, useEffect } from "react";
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();
  const shouldSetBgColor = window.location.href.includes("pairaddress");

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {isMobileView ? (
        <>
          <IconButton aria-label="Open Sidebar" icon={<HamburgerIcon />} onClick={onOpen} position="fixed" top={4} left={4} zIndex={10} color="black" />
          <Drawer isOpen={isOpen} onClose={onClose} placement="left">
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <Box bg="#292929" color="white" w="100%" h="100vh" position="fixed" left={0} top={0} display="flex" flexDirection="column" justifyContent="space-between">
                    <Box>
                      <Box w="100%" p={4} h="50px" display="flex" gap="30px" mb={4}>
                        <i className="fab fa-twitter-square fa-2x" />
                        <Text>NFTify</Text>
                      </Box>
                      <Box w="100%" p={4} h="40px" display="flex" gap="10px" onClick={() => handleClick("/")} bg={!shouldSetBgColor ? "#F30050" : "transparent"} cursor="pointer">
                        <i className="fas fa-map-pin" />
                        <span style={{ margin: "20px" }}>Token Address</span>
                      </Box>
                      <Box w="100%" p={4} h="40px" display="flex" gap="10px" onClick={() => handleClick("/pairaddress")} bg={shouldSetBgColor ? "#F30050" : "transparent"} cursor="pointer">
                        <i className="fas fa-dice-two" />
                        <span style={{ margin: "20px" }}>Pair Address</span>
                      </Box>
                    </Box>
                    <Box>
                      <Box p={4} display="flex" justifyContent="space-evenly">
                        <i className="fab fa-facebook-square fa-2x" style={{ color: "#f30050" }} />
                        <i className="fab fa-linkedin fa-2x" style={{ color: "#f30050" }} />
                        <i className="fab fa-twitter-square fa-2x" style={{ color: "#f30050" }} />
                      </Box>
                      <Box w="100%" h="40px" bg="#f30050" />
                    </Box>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      ) : (
        <Box bg="#292929" w="170px" h="100vh" position="fixed" left={0} top={0} display="flex" flexDirection="column" justifyContent="space-between">
          <Box>
            <Box w="100%" p={4} h="50px" display="flex" gap="30px" mb={4}>
              <i className="fab fa-twitter-square fa-2x" />
              <Text>NFTify</Text>
            </Box>
            <Box w="100%" p={2} h="60px" display="flex" gap="10px" onClick={() => handleClick("/")} bg={!shouldSetBgColor ? "#F30050" : "transparent"} cursor="pointer" alignItems="center">
              <i className="fas fa-map-pin" />
              <span style={{ margin: "10px" }}>Token Address</span>
            </Box>
            <Box w="100%" p={2} h="60px" display="flex" gap="10px" onClick={() => handleClick("/pairaddress")} alignItems="center" bg={shouldSetBgColor ? "#F30050" : "transparent"} cursor="pointer">
              <i className="fas fa-dice-two" />
              <span style={{ margin: "10px" }}>Pair Address</span>
            </Box>
          </Box>
          <Box>
            <Box p={4} display="flex" justifyContent="space-evenly">
              <i className="fab fa-facebook-square fa-2x" style={{ color: "#f30050" }} />
              <i className="fab fa-linkedin fa-2x" style={{ color: "#f30050" }} />
              <i className="fab fa-twitter-square fa-2x" style={{ color: "#f30050" }} />
            </Box>
            <Box w="100%" h="40px" bg="#f30050" />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
