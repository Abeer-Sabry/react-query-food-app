import React from "react";
import { SiIfood } from "react-icons/si";
import { useQueryClient } from "react-query";
// utilities
import { txtSlicer } from "../../utlies/func";

const RecipeItem = ({ image, id, title, setRecipeId }) => {
  const queryClient = useQueryClient();
  const cacheKey = queryClient.getQueryData(["recipe", id]);
  const description =
    "Pasta With Salmon Cream Sauce is a pescatarian main course. This recipe makes 4 servings with 439 calories, 23g of protein, and 15g of fat each. For $1.6 per serving, this recipe covers 23%";

  return (
    <div onClick={() => setRecipeId(id)} className="item">
      <div className="topLine"></div>
      <div className="mainDiv">
        <img src={image} alt="" style={{ width: "70px", height: "70px" }} />
        <div>
          <div className="title">
            <span>
              name <SiIfood /> :{" "}
            </span>
            <p>{title}</p>
          </div>
          <p className="desParagraph"> {txtSlicer(description, 50)}</p>
          {cacheKey ? (
            <p className="desParagraph">
              {" "}
              <span style={{ textTransform: "capitalize", color: "#fc6767" }}>cached:</span> cached
              Data
            </p>
          ) : null}
        </div>
      </div>
      <button onclick={() => setRecipeId(id)} className="floatButton">
        Details
      </button>
    </div>
  );
};

export default RecipeItem;
