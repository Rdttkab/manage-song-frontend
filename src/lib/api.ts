import { ISong, ISongs } from "../types";

const base_url = import.meta.env.VITE_BASE_URL;

export const getSongs = async (): Promise<ISongs> =>
  fetch(`${base_url}/song`).then((res) => res.json());

export const deleteSong = async (id: string): Promise<ISong> =>
  fetch(`${base_url}/song/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
