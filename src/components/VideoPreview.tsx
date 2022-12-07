import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Link } from './RouterLink';
import { ISearchVideoPreview } from '../interfaces/videos.interface';

interface VideoPreviewProps {
  video: ISearchVideoPreview;
}

const useStyles = makeStyles()({
  cardMedia: {
    width: '100%',
    aspectRatio: '16 / 9',
    backgroundSize: 'cover',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
  },
  channelLink: {
    color: '#fff',
    textDecoration: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.15)',

    '&:hover': {
      borderBottom: '1px solid rgba(255,255,255,0.5)',
    },
  },
  cardContent: {
    padding: '0.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  cardActions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const VideoPreview = ({ video }: VideoPreviewProps) => {
  const { classes } = useStyles();

  const {
    id: { videoId },
    snippet: { title, channelTitle, channelId, thumbnails, publishedAt },
  } = video;

  const date = new Date(publishedAt);

  const dateString = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);

  return (
    <Card classes={{ root: classes.card }}>
      <CardActionArea component={Link} to={`/video/${videoId}`}>
        <CardMedia image={thumbnails.high.url} classes={{ root: classes.cardMedia }} />
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography variant='subtitle2' noWrap>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions classes={{ root: classes.cardActions }}>
        <Typography
          classes={{ root: classes.channelLink }}
          variant='caption'
          noWrap
          component={Link}
          gutterBottom
          to={`/channel/${channelId}`}
        >
          {channelTitle}
        </Typography>
        <Typography variant='caption'>{dateString}</Typography>
      </CardActions>
    </Card>
  );
};

export default VideoPreview;
