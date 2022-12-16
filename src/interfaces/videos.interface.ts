export interface ISearchVideoPreview {
  id: {
    kind: 'youtube#video' | 'youtube#channel';
    videoId?: string;
    channelId?: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: IThumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export interface IThumbnails {
  default: IThumbnail;
  medium: IThumbnail;
  high: IThumbnail;
  maxres?: IThumbnail;
  standard?: IThumbnail;
}

export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface IVideoDetails {
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    title: string;
    publishedAt: string;
    thumbnails: IThumbnails;
    tags: string;
  };
  statistics: {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}

export interface IChannelDetails {
  snippet: {
    title: string;
    description: string;
    thumbnails: IThumbnails;
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    videoCount: string;
  };
}

export interface IFetchedChannelDetails {
  items: Array<IChannelDetails>;
}

export interface IFetchedData {
  items: Array<ISearchVideoPreview | IVideoDetails | IChannelDetails>;
}
