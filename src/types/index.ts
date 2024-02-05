export interface ISongs {
  success: boolean;
  message: string;
  song: [];
}
export interface ISong {
  success: boolean;
  message: string;
  song: Song;
}

export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
}

export interface SongState {
  songs: Song[];
  isLoading: boolean;
  error: string;
}

export interface IState {
  songs: SongState;
}
