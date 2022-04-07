import { Box, Container } from '@mui/material';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default function CarouselGallery(props) {  
  const { options } = props  
  return (
    <Box 
      component="section" 
      sx={{
        marginTop: {          
          xs: 0,
          lg: '24px',
        },
        marginBottom: {
          xs: 0,
          lg: '24px',
        },
      }}
    >
      <Container
        sx={{
          paddingLeft: {          
            xs: 0,
            lg: '24px',
          },
          paddingRight: {
            xs: 0,
            lg: '24px',
          },
        }}
      >
        <ImageGallery 
          items={images}
          lazyLoad={true}
          {...options}
        />
      </Container>
    </Box>
  );
}