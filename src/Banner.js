import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Grid,
  Spinner,
  Select,
  Button,
  Image,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <Flex direction="column" alignItems="center">
      <motion.img
        src="./Images/dragon_feature.jpg"
        alt="Banner Image"
        padding="100px"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Text
          color="white"
          fontSize={{ base: '42px', md: '82px' }}
          fontWeight="bold"
          mt={4}
          textAlign="center"
        >
          CAPSULES
        </Text>
          <Text
            color="white"
            fontSize={{ base: 'sm', md: 'xl' }}
            fontWeight="bold"
            mt={4}
            textAlign="center"
          >
            SENDING HUMANS AND CARGO INTO SPACE
          </Text>
      </motion.div>
      <Flex direction={['column', 'row', 'row']} alignItems="center">
        <Box w={['100%', '50%', '50%']}>
          <Text
            color="white"
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="bold"
            mt={4}
            textAlign="center"
            p={10}
          >
            The Capsule is capable of carrying up to 7 passengers to and from
            Earth orbit, and beyond. It is the only is the first private
            spacecraft to take humans to the space station.
          </Text>
        </Box>
        <Box w={['100%', '50%', '50%']} margin={'40px'}>
          <motion.img
            src="./Images/dragon_humans.jpg"
            alt="Banner Image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </Box>
      </Flex>
      <Box w={'100%'} margin={'40px'}>
        <motion.img
          src="./Images/DR_6.jpg"
          alt="Banner Image"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </Box>
      <Text
        color="white"
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="bold"
        mt={[10, 'Null', 10]}
        mb={[10, 'Null', 10]}
        textAlign="center"
      >
        Our Capsules Available for Exploration and Transport
      </Text>
    </Flex>
  );
};

export default Banner;
