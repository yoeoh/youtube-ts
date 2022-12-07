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
}

export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}
