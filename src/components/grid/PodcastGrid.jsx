import { Grid } from '@mui/material';
import React from 'react';
import PodcastCard from '../card/PodcastCard';

const PodcastGrid = ({ podcasts }) => {
  return (
    <Grid
      container
      spacing={3}
    >
      {podcasts?.map((podcast) => (
        <Grid
          key={podcast.link}
          item
          xs={12}
          sm={4}
        >
          <PodcastCard podcast={podcast} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PodcastGrid;
