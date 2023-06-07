import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="black" color="white" py={8} mt={20} borderTop={'solid 1px white'}>
      <Flex justifyContent="center" alignItems="center">
        <Text fontSize="xl">NFTify 2023</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
