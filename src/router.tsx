import { createBrowserRouter } from 'react-router-dom';

import Root from './routes/root';
import ErrorPage from './routes/ErrorPage';
import VideoPage from './routes/VideoPage';

import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import Feed from './components/Feed';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Feed /> },
      {
        path: '/channel/:channelId',
        element: <ChannelDetail />,
      },
      {
        path: '/search/:searchTerm',
        element: <SearchFeed />,
      },
    ],
  },
  {
    path: '/video/:videoId',
    element: <VideoPage />,
  },
]);

export default router;
