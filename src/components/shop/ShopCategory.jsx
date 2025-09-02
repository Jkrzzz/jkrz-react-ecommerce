import React from "react";

const ShopCategory = ({
  filterItem,
  menuItems,
  setProducts,
  selectedCategory,
  Data,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="m2-2">All Category</h5>
      </div>
      <div>
        <button
          onClick={() => {
            filterItem("All");
          }}
          className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        {menuItems.map((val, i) => (
          <button
            key={i}
            className={`m-2 ${selectedCategory === val ? "bg-warning" : ""}`}
            onClick={() => filterItem(val)}
          >
            {val}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
