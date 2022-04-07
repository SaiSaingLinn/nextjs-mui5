import * as React from 'react';
import Image from 'next/image';
import { 
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Link,
} from '@mui/material';
import styled from '@emotion/styled';
import NextLink from 'next/link';

const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  img {
    object-fit: contain;
  }
`
export default function MediaCard(props) {
  const { data } = props
  return (
    <>
      {
        data.map(item => (
          <Grid item xs={12} md={4} key={item?.id}>
            <Card>
              <CardActionArea>
                <NextLink href={`/`} passHref>
                  <Link underline="none">
                    <ImageWrapper>
                      <Image
                        src={item?.image}
                        alt={item?.title}
                        layout="fill"
                      />
                    </ImageWrapper>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item?.price}
                      </Typography>
                    </CardContent>
                  </Link>
                </NextLink>
              </CardActionArea>
            </Card>
          </Grid>
      ))}
    </>
  );
}
