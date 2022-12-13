import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Collapse, Divider, Typography } from '@mui/material';
import ReactPlayer from 'react-player/youtube';

import { Link } from './RouterLink';

import { YOUTUBE_VIDEO_BASE_URL } from '../constants/video';

import { IVideoDetails } from '../interfaces/videos.interface';

interface IVideoDetailsParams {
  videoId: string;
  isError: boolean;
  isLoading: boolean;
  error: unknown;
  data: {
    items: IVideoDetails[];
  };
}

const useStyles = makeStyles()({
  playerWrapper: {
    aspectRatio: '16 / 9',
  },
  statistics: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginBottom: '1rem',
  },
  statisticsRight: {
    marginLeft: 'auto',
    display: 'flex',
    gap: '0.5rem',
  },
  statisticsItem: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    paddingTop: '0.4rem',
    paddingBottom: '0.4rem',
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '0.25rem',

    '& hr': {
      borderColor: 'rgba(255,255,255,0.3)',
      marginLeft: '0.5rem',
      marginRight: '0.5rem',
    },
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  descriptionWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '0.5rem',
    borderRadius: '0.25rem',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
});

const VideoDetails = ({ videoId, isError, isLoading, error, data }: IVideoDetailsParams) => {
  const { classes } = useStyles();
  const [descOpenned, setDescOpenned] = useState(false);

  const handleDescOpen = () => {
    setDescOpenned(!descOpenned);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{`Error ${error}`}</div>;
  }

  if (!data.items.length) {
    return <div>No data</div>;
  }

  const {
    snippet: { channelId, channelTitle, description, title, publishedAt, tags },
    statistics: { commentCount, likeCount, viewCount },
  } = data.items[0] as IVideoDetails;

  return (
    <Box>
      <Box className={classes.playerWrapper}>
        <ReactPlayer
          url={`${YOUTUBE_VIDEO_BASE_URL}${videoId}`}
          controls
          light
          width='100%'
          height='100%'
        />
      </Box>

      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>

      <Box className={classes.statistics}>
        <Typography
          variant='subtitle1'
          component={Link}
          underline='hover'
          to={`/channel/${channelId}`}
        >
          {channelTitle}
        </Typography>
        <Box className={classes.statisticsRight}>
          <Box className={classes.statisticsItem}>
            <Typography variant='caption'>commentaries</Typography>
            <Divider orientation='vertical' flexItem light />
            <Typography variant='subtitle2'>{commentCount}</Typography>
          </Box>
          <Box className={classes.statisticsItem}>
            <Typography variant='caption'>likes</Typography>
            <Divider orientation='vertical' flexItem light />
            <Typography variant='subtitle2'>{likeCount}</Typography>
          </Box>
          <Box className={classes.statisticsItem}>
            <Typography variant='caption'>views</Typography>
            <Divider orientation='vertical' flexItem light />
            <Typography variant='subtitle2'>{viewCount}</Typography>
          </Box>
        </Box>
      </Box>

      <Collapse
        in={descOpenned}
        collapsedSize='3.3rem'
        className={classes.descriptionWrapper}
        onClick={handleDescOpen}
      >
        <Box className={classes.description}>
          <Typography variant='caption' gutterBottom>
            {publishedAt}
          </Typography>
          <Typography variant='subtitle2' gutterBottom>
            {description}
          </Typography>
          <Typography variant='caption'>{`tags: ${tags}`}</Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default VideoDetails;
