import React, { useState } from "react";
// hooks
import useFetchData from "../../hooks/useFetchData";
// components
import ItemSkeleton from "../ItemSkeleton/ItemSkeleton";
import Pagination from "../Pagination/Pagination";
import RecipeDetails from "./RecipeDetails";
import RecipeItem from "./RecipeItem";

const Recipes = ({ page, setPage, number }) => {
  const { data, isFetching, isLoading } = useFetchData(
    ["recipes", number, page],
    `/recipes/complexSearch?apiKey=7586ad9170994539a3eedb60730a5d80&number=${number}&offset=${page}&query=pasta`
  );
  const [recipeId, setRecipeId] = useState(-1);

  // pagination-next-buttonFunc
  const onClickNext = () => {
    setPage(prev => prev + 1);
  };
  // pagination-prev-buttonFunc
  const onClickPrev = () => {
    setPage(prev => Math.min(prev - 1), 0);
  };

  return (
    <>
      {recipeId > -1 ? (
        <RecipeDetails recipeId={recipeId} setRecipeId={setRecipeId} />
      ) : (
        <div className="recipes">
          {isFetching && isLoading
            ? Array(15)
                .fill(1)
                .map((_, idx) => <ItemSkeleton key={idx} />)
            : data.data.results.map(recipe => (
                <RecipeItem key={recipe.id} {...recipe} setRecipeId={setRecipeId} />
              ))}
        </div>
      )}

      {recipeId > -1 ? null : (
        <Pagination
          currentPage={page}
          lastPage={(100 / number).toFixed()}
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
          isNextDisabled={page * number >= 100}
          isPrevDisabled={page === 0}
        />
      )}
    </>
  );
};

export default Recipes;
