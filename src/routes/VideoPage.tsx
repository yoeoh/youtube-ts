import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import VideoDetails from '../components/VideoDetails';
import { fetchFromYoutubeApi } from '../utils/fetchFromYoutubeApi';

const useStyles = makeStyles()({
  videoPageLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: '1rem',
  },
  videoDetails: {
    minWidth: '480px',
    flexBasis: '75%',
    flexShrink: 0,
    flexGrow: 1,
  },
  suggestedVideos: {
    flexBasis: '20%',
    flexShrink: 0,
    flexGrow: 1,
  },
});

const VideoPage = () => {
  const { classes } = useStyles();
  const { videoId } = useParams();

  const { isError, isLoading, data, error } = useQuery(['video', videoId], () =>
    fetchFromYoutubeApi('videos', {
      id: videoId,
      part: 'snippet,statistics',
    }),
  );

  if (!videoId) return <div>No video id</div>;

  return (
    <Box className={classes.videoPageLayout}>
      <Box className={classes.videoDetails}>
        <VideoDetails
          videoId={videoId}
          isError={isError}
          isLoading={isLoading}
          error={error}
          data={data}
        />
      </Box>
      <Box className={classes.suggestedVideos}>suggested videos</Box>
    </Box>
  );
};

export default VideoPage;
