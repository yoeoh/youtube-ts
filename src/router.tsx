import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import ErrorPage from './routes/ErrorPage';

import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

import Feed from './routes/Feed';
import VideoPage from './routes/VideoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
      {
        path: '/video/:videoId',
        element: <VideoPage />,
      },
    ],
  },
]);

export default router;
