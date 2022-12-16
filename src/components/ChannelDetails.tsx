import { Box, Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { IChannelDetails } from '../interfaces/videos.interface';

interface IChannelDetailsProps {
  isError: boolean;
  isLoading: boolean;
  error: unknown;
  data: {
    items: IChannelDetails[];
  };
}

const useStyles = makeStyles()({
  channelHeader: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
  },
  channelImage: {
    width: '15rem',
    height: '15rem',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  statistics: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    columnGap: '1rem',
  },
});

const ChannelDetails = ({ isLoading, isError, error, data }: IChannelDetailsProps) => {
  const { classes } = useStyles();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{`Error ${error}`}</div>;
  }

  if (!data?.items?.length) {
    return <div>No channel</div>;
  }

  const {
    snippet: { title, thumbnails },
    statistics: { subscriberCount },
  } = data.items[0];

  return (
    <Card className={classes.channelHeader}>
      <CardMedia image={thumbnails.high.url} component='img' className={classes.channelImage} />
      <CardContent className={classes.title}>
        <Typography variant='h1' noWrap>
          {title}
        </Typography>
        <Box className={classes.statistics}>
          <Typography>{subscriberCount} subscribers</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChannelDetails;
