import { Box } from '@mui/material';
import { useQueries } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import SuggestedVideos from '../components/SuggestedVideos';
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
    flexBasis: '80%',
    flexShrink: 0,
    flexGrow: 1,
  },
  suggestedVideos: {
    flexBasis: '15%',
    minWidth: '250px',
    flexShrink: 1,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem',
  },
});

const VideoPage = () => {
  const { classes } = useStyles();
  const { videoId } = useParams();

  const [videoQuery, suggestedVideosQuery] = useQueries({
    queries: [
      {
        queryKey: ['video', videoId],
        queryFn: () =>
          fetchFromYoutubeApi('videos', {
            id: videoId,
            part: 'snippet,statistics',
          }),
      },
      {
        queryKey: ['suggestedVideos', videoId],
        queryFn: () =>
          fetchFromYoutubeApi('search', {
            relatedToVideoId: videoId,
            part: 'snippet,id',
            type: 'video',
          }),
      },
    ],
  });

  if (!videoId) return <div>No video id</div>;

  return (
    <Box className={classes.videoPageLayout}>
      <Box className={classes.videoDetails}>
        <VideoDetails
          videoId={videoId}
          isError={videoQuery.isError}
          isLoading={videoQuery.isLoading}
          error={videoQuery.error}
          data={videoQuery.data}
        />
      </Box>

      <Box className={classes.suggestedVideos}>
        <SuggestedVideos
          isError={suggestedVideosQuery.isError}
          isLoading={suggestedVideosQuery.isLoading}
          error={suggestedVideosQuery.error}
          data={suggestedVideosQuery.data}
        />
      </Box>
    </Box>
  );
};

export default VideoPage;
