import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import ChannelDetails from '../components/ChannelDetails';
import VideosList from '../components/VideosList';
import { IFetchedChannelDetails } from '../interfaces/videos.interface';
import { fetchFromYoutubeApi } from '../utils/fetchFromYoutubeApi';

const useStyles = makeStyles()({
  description: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
});

const ChannelPage = () => {
  const { channelId } = useParams<{ channelId: string }>() as { channelId: string };
  const [tabIndex, setTabIndex] = useState(0);
  const { classes } = useStyles();

  const channelData = useQuery<IFetchedChannelDetails>({
    queryKey: ['channel', channelId],
    queryFn: () =>
      fetchFromYoutubeApi('channels', {
        part: 'snippet,statistics',
        id: channelId,
      }),
  });

  const isChannelDataLoaded = channelData?.data?.items?.length;

  const channelVideos = useQuery({
    queryKey: ['channelVideos', channelId],
    queryFn: () =>
      fetchFromYoutubeApi('search', {
        channelId: channelId,
        part: 'snippet,id',
        order: 'date',
        maxResults: '20',
      }),
    enabled: !!isChannelDataLoaded,
  });

  if (!channelData?.data) return <div>no data</div>;
  if (!channelVideos?.data) return <div>no videos</div>;

  const handleTabChange = (e: React.SyntheticEvent, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <ChannelDetails {...channelData} />
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label='videos' />
        <Tab label='description' />
      </Tabs>
      {tabIndex === 0 && (
        <Box>
          <VideosList videos={channelVideos.data.items} />
        </Box>
      )}
      {tabIndex === 1 && (
        <Box className={classes.description}>
          <Typography>{channelData.data.items[0].snippet.description}</Typography>
          <Typography>{channelData.data.items[0].statistics.videoCount} videos</Typography>
          <Typography>{channelData.data.items[0].statistics.viewCount} views</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ChannelPage;
