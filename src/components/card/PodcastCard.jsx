import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import MicNoneIcon from '@mui/icons-material/MicNone';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react';
import { red } from '@mui/material/colors';

const PodcastCard = ({ podcast }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label='podcast'
          >
            <MicNoneIcon />
          </Avatar>
        }
        title={podcast.title}
        subheader={podcast.author}
      />
      <CardMedia
        component='img'
        height='194'
        image={podcast.thumbnail}
        alt='podcast thumbnail'
      />
      <CardContent>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {podcast.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='play/pause'>
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PodcastCard;
