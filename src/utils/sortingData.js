import {
  SORTING_LIKES,
  SORTING_PRICE_HIGH,
  SORTING_PRICE_LOW,
  SORTING_SALE,
} from "./constants";

export const sortingData = (data, sortingType) => {
  switch (sortingType) {
    case SORTING_SALE:
      return [...data].sort((a, b) => {
        if (a.discount > b.discount) return -1;
        if (a.discount < b.discount) return 1;
        return 0;
      });

    case SORTING_PRICE_LOW:
      return [...data].sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      });
    case SORTING_PRICE_HIGH:
      return [...data].sort((a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
      });
    case SORTING_LIKES:
      return [...data].sort((a, b) => {
        if (a.likes.length > b.likes.length) return -1;
        if (a.likes.length < b.likes.length) return 1;
        return 0;
      });

    default:
      return data;
  }
};
