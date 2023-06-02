import { Box, Grid, Skeleton } from '@chakra-ui/react';
import React from 'react';

/* Loading component to display a skeleton loading state while data is being fetched. */

export const Loading = () => {
  return (
    <Grid
      templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']}
      gap={2}
      w={'100%'}
      mt={[6, null, 10]}
    >
      {Array.from({ length: 8 }, (_, index) => (
        <Box
          key={index}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >
          <Skeleton height="15px" width="40%" m={3} />
          <hr />
          <Skeleton height="10px" width="70%" m={3} />
          <Skeleton height="10px" width="80%" m={3} />
          <Skeleton height="10px" width="70%" m={3} />
          <Skeleton height="10px" width="90%" m={3} />
        </Box>
      ))}
    </Grid>
  );
};
