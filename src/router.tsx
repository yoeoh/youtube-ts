import { createBrowserRouter } from 'react-router-dom';

import Root from './routes/root';

import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';
import ErrorPage from './routes/errorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/video/:videoId',
        element: <VideoDetail />,
      },
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
]);

export default router;
