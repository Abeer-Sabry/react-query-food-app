import React from "react";
// react-icons
import { SiIfood } from "react-icons/si";
// react-query
import { useQueryClient } from "react-query";
// hooks
import useFetchDataWithId from "../../hooks/useFetchDataWithId";
import ItemSkeleton from "../ItemSkeleton/ItemSkeleton";

const RecipeDetails = ({ recipeId, setRecipeId }) => {
  const queryClient = useQueryClient();
  const cacheKey = queryClient.getQueryData(["recipe", recipeId]);
  const { data, isError, isLoading } = useFetchDataWithId("recipe", "recipes", recipeId);
  console.log("detailData", data);

  if (isLoading) return <ItemSkeleton />;
  if (isError) return <span>something is going wrong</span>;

  return (
    <div onClick={() => setRecipeId(-1)} className="item">
      <div className="topLine"></div>
      <div className="mainDiv">
        <img src={data.data.image} alt={data.data.title} style={{ width: "20%" }} />
        <div>
          <div className="title">
            <span style={{ fontSize: "15px", display: "inline-block", width: "70px" }}>
              name <SiIfood /> :{" "}
            </span>
            <p style={{ fontSize: "20px" }}>{data.data.title}</p>
          </div>
          <p
            style={{ lineHeight: "20px" }}
            dangerouslySetInnerHTML={{ __html: data.data.summary.substring(0, 250) }}
          ></p>
          {cacheKey ? (
            <p>
              {" "}
              <span style={{ color: "#fc6767" }}>Cached:</span> cached Data
            </p>
          ) : null}
        </div>
      </div>
      <button className="floatButton" style={{ fontSize: "12px" }} onClick={() => setRecipeId(-1)}>
        GO Back
      </button>
    </div>
  );
};

export default RecipeDetails;
