import { DataList } from "@/types";
import { uniq } from "lodash";

export const groupLocationsByLatLong = (data: DataList[]) => {
  const locations = [] as {
    lat: number;
    long: number;
    assetNames: string[];
    businessCategories: string[];
  }[];
  data.forEach((asset) => {
    if (
      !locations.find(
        (location) => location.lat === asset.lat && location.long === asset.long
      )
    ) {
      locations.push({
        lat: asset.lat,
        long: asset.long,
        assetNames: getAssetNamesByLatLong(data, asset.lat, asset.long),
        businessCategories: getBusinessCategoriesByLatLong(
          data,
          asset.lat,
          asset.long
        ),
      });
    }
  });
  return locations;
};

export const getAssetNamesByLatLong = (
  data: DataList[],
  lat: number,
  long: number
) => {
  const names = [] as string[];
  data.forEach((asset) => {
    if (asset.lat === lat && asset.long === long) {
      names.push(asset.assetName);
    }
  });
  return uniq(names);
};

export const getBusinessCategoriesByLatLong = (
  data: DataList[],
  lat: number,
  long: number
) => {
  const categories = [] as string[];
  data.forEach((asset) => {
    if (asset.lat === lat && asset.long === long) {
      categories.push(asset.businessCategory);
    }
  });
  return uniq(categories);
};
