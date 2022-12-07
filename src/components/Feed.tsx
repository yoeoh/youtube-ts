import { useQuery } from '@tanstack/react-query';

import { fetchFromYoutubeApi } from '../utils/fetchFromYoutubeApi';

import VideosList from './VideosList';

const Feed = () => {
  const { isError, isLoading, data, error } = useQuery(['videos'], () =>
    fetchFromYoutubeApi('search', {
      q: 'standup club',
      part: 'snippet',
      maxResults: '50',
    }),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{`Error ${error}`}</div>;
  }

  console.log(data);

  return <VideosList videos={data.items} />;
};

export default Feed;
