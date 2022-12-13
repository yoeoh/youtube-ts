import { ISearchVideoPreview } from '../interfaces/videos.interface';
import VideoPreview from './VideoPreview';

interface ISuggestedVideosProps {
  isError: boolean;
  isLoading: boolean;
  error: unknown;
  data: {
    items: Array<ISearchVideoPreview>;
  };
}

const SuggestedVideos = ({ isError, isLoading, error, data }: ISuggestedVideosProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{`Error ${error}`}</div>;
  }

  if (!data?.items?.length) {
    return <div>No suggested videos</div>;
  }

  const videos = data.items.splice(0, 10);

  return (
    <>
      {videos.map((video: ISearchVideoPreview) => (
        <VideoPreview key={video.id.videoId} video={video} />
      ))}
    </>
  );
};

export default SuggestedVideos;
