import { Grid } from '@mui/material';
import { ISearchVideoPreview } from '../interfaces/videos.interface';
import VideoPreview from './VideoPreview';

interface VideosListProps {
  videos: Array<ISearchVideoPreview>;
}

const gridItemSize = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 3,
};

const VideosList = ({ videos }: VideosListProps) => {
  return (
    <Grid container spacing={2}>
      {videos.map((video: ISearchVideoPreview) =>
        video.id.kind === 'youtube#channel' ? (
          <Grid item {...gridItemSize} key={video.id.channelId}>
            {video.id.channelId}
          </Grid>
        ) : (
          <Grid item {...gridItemSize} key={video.id.videoId}>
            <VideoPreview video={video} />
          </Grid>
        ),
      )}
    </Grid>
  );
};

export default VideosList;
