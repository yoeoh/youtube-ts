import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import ReactPlayer from 'react-player/youtube';

import { Box, Toolbar, Typography } from '@mui/material';

import Header from '../components/Header';

import { fetchFromYoutubeApi } from '../utils/fetchFromYoutubeApi';

import { YOUTUBE_VIDEO_BASE_URL } from '../constants/video';

import { IVideoDetails } from '../interfaces/videos.interface';

const useStyles = makeStyles()({
  root: {
    maxWidth: '100vw',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
  },
  container: {
    padding: '1rem',
    backgroundColor: '#000',
    color: '#fff',
    maxWidth: '100%',
    width: '100%',
  },
});

const VideoPage = () => {
  const { videoId } = useParams();
  const { classes } = useStyles();
  const { isError, isLoading, data, error } = useQuery(['video', videoId], () =>
    fetchFromYoutubeApi('videos', {
      id: videoId,
      part: 'snippet,statistics',
    }),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{`Error ${error}`}</div>;
  }

  const {
    snippet: { channelId, channelTitle, description, title, publishedAt, thumbnails, tags },
    statistics: { commentCount, favoriteCount, likeCount, viewCount },
  } = data.items[0] as IVideoDetails;

  return (
    <Box className={classes.root}>
      <Header />
      <Box className={classes.container} component='main'>
        <Toolbar />
        <Box>
          <ReactPlayer
            url={`${YOUTUBE_VIDEO_BASE_URL}${videoId}`}
            controls
            light
            width='80vw'
            height='80vh'
          />
          <Typography variant='h4' gutterBottom>
            {title}
          </Typography>
          <Typography variant='subtitle2'>{description}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPage;
