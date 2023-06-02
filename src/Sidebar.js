import React, { useState } from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();
  const shouldSetBgColor = window.location.href.includes('pairaddress');

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobileView(true);
      onClose();
    } else {
      setIsMobileView(false);
    }
  };

  // Handle window resize events
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobileView ? (
        <>
          <IconButton
            aria-label="Open Sidebar"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            position="fixed"
            top={4}
            left={4}
            zIndex={10}
            color={'black'}
          />
          <Drawer isOpen={isOpen} onClose={onClose} placement="left">
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <Box
                    bg="#292929"
                    color={'white'}
                    w="100%"
                    h="100vh"
                    position="fixed"
                    left={0}
                    top={0}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Box
                        w="100%"
                        p={4}
                        h={'50px'}
                        display={'flex'}
                        gap={'30px'}
                        mb={4}
                      >
                        <i class="fab fa-twitter-square fa-2x"></i>
                        <Text>NFTify</Text>
                      </Box>
                      <Box
                        w="100%"
                        p={4}
                        h={'40px'}
                        display={'flex'}
                        gap={'10px'}
                        onClick={() => navigate('/')}
                        bg={!shouldSetBgColor ? '#F30050' : 'transparent'}
                        cursor={"pointer"}
                      >
                        <i class="fas fa-map-pin">
                          <span style={{ margin: '20px' }}>Token Address</span>
                        </i>
                      </Box>
                      <Box
                        w="100%"
                        p={4}
                        h={'40px'}
                        display={'flex'}
                        gap={'10px'}
                        onClick={() => navigate('/pairaddress')}
                        bg={shouldSetBgColor ? '#F30050' : 'transparent'}
                        cursor={"pointer"}
                      >
                        <i class="fas fa-dice-two">
                          <span style={{ margin: '20px' }}>Pair Address</span>
                        </i>
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        p={4}
                        display={'flex'}
                        justifyContent={'space-evenly'}
                      >
                        <i
                          class="fab fa-facebook-square fa-2x"
                          style={{ color: '#f30050' }}
                        ></i>
                        <i
                          class="fab fa-linkedin fa-2x"
                          style={{ color: '#f30050' }}
                        ></i>
                        <i
                          class="fab fa-twitter-square fa-2x"
                          style={{ color: '#f30050' }}
                        ></i>
                      </Box>
                      <Box w="100%" h={'40px'} bg={'#f30050'}></Box>
                    </Box>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      ) : (
        <Box
          bg="#292929"
          w="170px"
          h="100vh"
          position="fixed"
          left={0}
          top={0}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Box w="100%" p={4} h={'50px'} display={'flex'} gap={'30px'} mb={4}>
              <i class="fab fa-twitter-square fa-2x"></i>
              <Text>NFTify</Text>
            </Box>
            <Box
              w="100%"
              p={2}
              h={'60px'}
              display={'flex'}
              gap={'10px'}
              onClick={() => navigate('/')}
              bg={!shouldSetBgColor ? '#F30050' : 'transparent'}
              cursor={"pointer"}
              alignItems={'center'}
            >
              <i class="fas fa-map-pin">
                <span style={{ margin: '10px' }}>Token Address</span>
              </i>
            </Box>
            <Box
              w="100%"
              p={2}
              h={'60px'}
              display={'flex'}
              gap={'10px'}
              onClick={() => navigate('/pairaddress')}
              alignItems={'center'}
              bg={shouldSetBgColor ? '#F30050' : 'transparent'}
              cursor={"pointer"}
            >
              <i class="fas fa-dice-two">
                <span style={{ margin: '10px' }}>Pair Address</span>
              </i>
            </Box>
          </Box>
          <Box>
            <Box p={4} display={'flex'} justifyContent={'space-evenly'}>
              <i
                class="fab fa-facebook-square fa-2x"
                style={{ color: '#f30050' }}
              ></i>
              <i class="fab fa-linkedin fa-2x" style={{ color: '#f30050' }}></i>
              <i
                class="fab fa-twitter-square fa-2x"
                style={{ color: '#f30050' }}
              ></i>
            </Box>
            <Box w="100%" h={'40px'} bg={'#f30050'}></Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
