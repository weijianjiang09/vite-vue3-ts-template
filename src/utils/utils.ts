// 获取assets/img/home静态资源
const getAssetsHomeFile = (url: string | undefined) => {
  return new URL(`../assets/img/home/${url}`, import.meta.url).href;
};
const getAssetsHeraderFile = (url: string | undefined) => {
  return new URL(`../assets/img/herader/${url}`, import.meta.url).href;
};
const getAssetsLeaveFile = (url: string | undefined) => {
  return new URL(`../assets/img/leave/${url}`, import.meta.url).href;
};
const getAssetsExhibitionFile = (url: string | undefined) => {
  return new URL(`../assets/img/exhibition/${url}`, import.meta.url).href;
};
const getAssetsVideoFile = (url: string | undefined) => {
  return new URL(`../assets/img/video/${url}`, import.meta.url).href;
};
const getAssetsCelebrityFile = (url: string | undefined) => {
  return new URL(`../assets/img/celebrity/${url}`, import.meta.url).href;
};
const getAssetsStatementFile = (url: string | undefined) => {
  return new URL(`../assets/img/statement/${url}`, import.meta.url).href;
};

export default {
  getAssetsHomeFile,
  getAssetsHeraderFile,
  getAssetsLeaveFile,
  getAssetsExhibitionFile,
  getAssetsVideoFile,
  getAssetsCelebrityFile,
  getAssetsStatementFile,
};
