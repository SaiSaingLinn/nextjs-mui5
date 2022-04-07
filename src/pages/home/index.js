import React from 'react'
import CarouselGallery from 'src/views/carousel-gallery';
import ItemList from 'src/views/item-list';

export default function Home(){
  return (
    <>
      <CarouselGallery 
        options={{
          showNav: false, 
          showThumbnails: false,
          showFullscreenButton: false,
          showPlayButton: false,
          showBullets: true,
          autoPlay: true,
        }}
      />
      <ItemList />
    </>
  );
}