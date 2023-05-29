export const SORTING_PRICE_LOW = "SORTING_PRICE_LOW";
export const SORTING_PRICE_HIGH = "SORTING_PRICE_HIGH";
export const SORTING_LIKES = "SORTING_LIKES";
export const SORTING_SALE = "SORTING_SALE";

export const sortingValues = [
  { value: "Все", title: "Все товары" },
  { value: SORTING_PRICE_LOW, title: "Сначала недорогие" },
  { value: SORTING_PRICE_HIGH, title: "Сначала дорогие" },
  { value: SORTING_LIKES, title: "Сначал популярное" },
  { value: SORTING_SALE, title: "По скидке" },
];

export const PARAM_SORT = "sort";
