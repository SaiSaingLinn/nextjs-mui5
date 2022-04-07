import * as React from 'react';
import { useSelector } from "react-redux";
import { Box, Container, Grid, Typography } from '@mui/material';
import MediaCard from 'src/components/card';

const listing_data = [
  {
    id: 1,
    title: 'Item 1',
    price: '$100',
    image: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    id: 2,
    title: 'Item 2',
    price: '$200',
    image: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    id: 3,
    title: 'Item 3',
    price: '$300',
    image: 'https://picsum.photos/id/1019/1000/600/',
  },
]

export default function ItemList() {
  const { langData } = useSelector(state => state.translate)
  return (
    <Box component="section" sx={{mt: 3, mb: 3}}>
      <Container>
        <Typography variant="h5" mb={1}>{langData?.popular}</Typography>
        <Grid container spacing={2}>
          <MediaCard data={listing_data} />
        </Grid>
      </Container>
    </Box>
  );
}
