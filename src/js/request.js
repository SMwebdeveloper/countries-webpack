import loaderToggle from "./loader";

const request = async (api) => {
  loaderToggle(true);
  const res = await fetch(api);
  if (!res.ok) {
    loaderToggle(false);
    throw new Error("Upps api error");
  }
  const data = await res.json();
  loaderToggle(false);
  return data;
};

export default request;
