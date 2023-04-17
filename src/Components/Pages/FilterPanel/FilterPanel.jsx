import React from "react";
import Toggle from "../../Common/FilterListToggle/Toggle";
import { categoryList, ratingList } from "../../../Constants";
import "./filter.css";
import Check_box from "../../Common/CheckboxProton/Checkbox";
import Slider_comp from "../../Common/Slider/Slider";

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cusines,
  changeChecked,
  selectedPrice,
  changedPrice,
}) => {
  return (
    <div>
      <div className="input-group">
        <p className="label">Category</p>
        <Toggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* cousine */}
      <div className="input-group">
        <p className="label">Cuisines</p>
        {cusines.map((cusine) => (
          <Check_box
            key={cusine.id}
            cuisine={cusine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      {/*Price Range*/}
      <div className="input-group">
        <p className="label-range">Price Range</p>
        <Slider_comp values={selectedPrice} changePrice={changedPrice} />
      </div>
      <div className="input-group">
        <p className="label">Star Rating</p>
        <Toggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
