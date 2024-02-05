const base_url = import.meta.env.VITE_BASE_URL;

export const getSongs = async (): Promise<ISongs> => fetch(`${base_url}/song`).then(res=>res.json());

