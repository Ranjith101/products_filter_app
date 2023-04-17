import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterPanel from "../FilterPanel/FilterPanel";
import Listing from "../List/Listing";
import "./styles.css";
import { dataList } from "../../../Constants";
import EmptyView from "../../Common/EmptyView/EmptyView";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [lists, setList] = useState(dataList);
  const [inputSearch, setInputSearch] = useState("");
  const [resultFound, setResultFound] = useState(false);


  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: "American" },
    { id: 2, checked: false, label: "Chinese" },
    { id: 3, checked: false, label: "Italian" },
  ]);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleRating = (event, value) =>
    !value ? null : setSelectedRating(value);
  const handleChangeChecked = (id) => {
    const cuisineStateList = cuisines;
    const changeCheckedCuisines = cuisineStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };
  const handleChangePrice = (event, value) => setSelectedPrice(value);

  const applyFilter = () => {
    let updatedList = dataList;
    //Rating
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    //Category Filter

    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    //priceFilter

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    //searchFilter

    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);

    !updatedList.length ? setResultFound(false): setResultFound(true);
  };

  useEffect(() => {
    applyFilter();
  }, [selectedRating, selectedCategory, cuisines, selectedPrice, inputSearch]);
  return (
    <div className="home">
      <SearchBar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <div className="home_panellist_wrap">
        <div className="home_panel_wrap">
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectedRating={selectedRating}
            selectRating={handleRating}
            cusines={cuisines}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changedPrice={handleChangePrice}
          />
        </div>
        <div className="home_list-wrap">
          {/* <Listing list={lists} /> */}

          {resultFound ? <Listing list={lists} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;
