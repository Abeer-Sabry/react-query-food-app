import React from "react";

const ItemSkeleton = () => {
  return (
    <div
      style={{
        backgroundColor: "#E2E2E2",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "20px",
        width: "300px",
      }}
    >
      <div style={{ width: "70%", height: "90px", backgroundColor: "#B5B7BB" }} />
      <div style={{ marginLeft: "50px", width: "100%" }}>
        <div
          style={{
            backgroundColor: "#B5B7BB",
            height: "40px",
            marginBottom: "10px",
          }}
        ></div>
        <div style={{ backgroundColor: "#B5B7BB", height: "40px" }}></div>
      </div>
    </div>
  );
};

export default ItemSkeleton;
