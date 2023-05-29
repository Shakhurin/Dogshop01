import { useState } from "react";
import { CardList } from "../../components/CardList";
import { PARAM_SORT, sortingValues } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
import style from './products.module.css'

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortingValue, setSortingValue] = useState(() => {
    const sort = searchParams.get(PARAM_SORT);

    return sort ? sort : "";
  });

  const handleSort = (event) => {
    const value = event.target.value;
    setSortingValue(value);

    if(value==="Все") {
      return setSearchParams((prev) => {
        prev.delete(PARAM_SORT);
        return prev;
      });
    }
    
    setSearchParams((prev) => {
      prev.set(PARAM_SORT, value);
      return prev;
    });
  };

  return (
    <>
    <div className={style.blockSortBar}>
      <div className={style.sortBar}>
        {sortingValues.map(({value, title}) => (
          <button value={value} key={value} onClick={(event) => handleSort(event)}>
            {title}
          </button>
        ))}
      </div>
    </div>
    <CardList sortingValue={sortingValue}/>
    </>
  );
};
