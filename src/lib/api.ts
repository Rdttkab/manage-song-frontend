const base_url = import.meta.env.VITE_BASE_URL;

export const getSongs = async () => {
  console.log("🚀 ~ base_url:", base_url);

  return fetch(`/${base_url}/breeds`).then((res) => res.json());
};
