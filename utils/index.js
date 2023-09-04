import { Asset } from "expo-asset";

export const _cacheResourcesAsync = async () => {
  const images = [
    require("../assets/images/background/1.jpg"),
    require("../assets/images/background/2.jpg"),
    require("../assets/images/background/3.jpg"),
    require("../assets/images/background/4.jpg"),
  ];

  const cacheImages = images.map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  return Promise.all(cacheImages);
};
