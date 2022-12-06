import { useQuery } from '@tanstack/react-query';

import { fetchFromYoutubeApi } from '../utils/fetchFromYoutubeApi';

const Feed = () => {
  const { isError, isLoading, data, error } = useQuery(['videos'], () =>
    fetchFromYoutubeApi('search', {
      q: 'standup club',
      part: 'snippet',
      maxResults: '20',
    }),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{`Error ${error}`}</div>;
  }

  console.log(data);

  return (
    <div>
      {data.items
        .filter((item: any) => item.id.videoId)
        .map((item: any, index: number) => (
          <div key={item.id.videoId}>{`index: ${index}, id: ${item.id.videoId}`}</div>
        ))}
    </div>
  );
};

export default Feed;
