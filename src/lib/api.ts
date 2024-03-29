import { ISong, ISongs } from "../types";

const base_url = import.meta.env.VITE_BASE_URL;

export const getSongs = async (): Promise<ISongs> =>
  fetch(`${base_url}/song`).then((res) => res.json());

export const getSong = async (id: string): Promise<ISong> =>
  fetch(`${base_url}/song/${id}`).then((res) => res.json());

export const addSong = async (data: {
  song: string;
  artist: string;
  album: string;
  genre: string;
}): Promise<ISong> =>
  fetch(`${base_url}/song`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export const updateSong = async (
  id: string,
  data: {
    song?: string;
    artist?: string;
    album?: string;
    genre?: string;
  }
): Promise<ISong> =>
  fetch(`${base_url}/song/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export const deleteSong = async (id: string): Promise<ISong> =>
  fetch(`${base_url}/song/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
