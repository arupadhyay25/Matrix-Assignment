import {
  Box,
  Button,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import Footer from './Footer';
import { Loading } from './Components/Loading';

const PairAddress = () => {
  const [tokenData, setTokenData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae'
        );
        const data = await response.json();
        setTokenData(data.pairs);
        console.log(data);
      } catch (error) {
        console.error('Error fetching token data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      p={0}
      ml={{ base: '0px', md: '170px', lg: '170px' }}
      minHeight={'100vh'}
    >
      <Box>
        <Box display={['block',"block", 'none']} textAlign="center" fontSize="xl" p={4}>
          <Text>NFTify</Text>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          p={'4'}
          alignItems={'center'}
        >
          <Stack spacing={4} width="300px">
            <InputGroup>
              <Input placeholder="Search" fontWeight={'bold'} />
              <InputRightElement>
                <Search2Icon color="white" />
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Button ml={4} bg="#F30050" fontWeight={'bold'}>
            Connect
          </Button>
        </Box>
        <Box padding={'20px 0px'}>
          <Text fontSize={'2xl'} fontWeight={'bold'}>
            Token Search Result
          </Text>
          <hr />
          {tokenData.length > 0 ? (
            tokenData.map((token, index) => (
              <Box key={index} mt={8} fontSize={'sm'}>
                <SimpleGrid columns={[1, 1, 2, 4]} spacing={2}>
                  <Box bg={'#390554'} p={4} borderRadius={10}>
                    <Text fontSize="md" fontWeight="bold">
                      Basic Info
                    </Text>
                    <hr />
                    <Box mt={4}>
                      <Text>Pair created at: {token.chainId}</Text>
                      <Text>Symbol: {token.baseToken.symbol}</Text>
                      <Text>DEx id: {token.dexId}</Text>
                      <Text isTruncated>Pair Address: {token.pairAddress}</Text>
                    </Box>
                  </Box>
                  <Box bg={'#390554'} p={4} borderRadius={10}>
                    <Text fontSize="md" fontWeight="bold">
                      Base Token
                    </Text>
                    <hr />
                    <Box mt={4}>
                      <Text>Name: {token.baseToken.name}</Text>
                      <Text>Symbol: {token.baseToken.symbol}</Text>
                      <Text isTruncated>
                        Address: {token.baseToken.address}
                      </Text>
                    </Box>
                  </Box>
                  <Box bg={'#390554'} p={4} borderRadius={10}>
                    <Text fontSize="md" fontWeight="bold">
                      Quote Token
                    </Text>
                    <hr />
                    <Box mt={4}>
                      <Text>Name: {token.quoteToken.name}</Text>
                      <Text>Symbol: {token.quoteToken.symbol}</Text>
                      <Text isTruncated>
                        Address: {token.quoteToken.address}
                      </Text>
                    </Box>
                  </Box>
                  <Box bg={'#390554'} p={4} borderRadius={10}>
                    <Text fontSize="md" fontWeight="bold">
                      Price
                    </Text>
                    <hr />
                    <Box mt={4}>
                      <Text>Price Native: {token.priceNative}</Text>
                      <Text>Price USD: {token.priceUsd}</Text>
                    </Box>
                  </Box>
                </SimpleGrid>
              </Box>
            ))
          ) : (
            <Loading />
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default PairAddress;
