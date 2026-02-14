import React, { useState, useEffect } from "react";
import Foodl from "/src/assets/icons/Foodl.svg";
import search from "/src/assets/icons/search.svg";
import imgOne from "/src/assets/images/imgOne.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

export const Search = () => {
  const [origin, setOrigin] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${origin}`;
    axios.get(url).then((response) => {
      setMeals(response.data.meals || []);
    });
  }, [origin]);

  return (
    <div>
      <div className="w-full bg-[url('/src/assets/images/Bg.png')]">
        <div className="w-10/12 mx-auto pt-6  flex justify-between items-center">
          <img src={Foodl} alt="Foodl" />
          <div>
            <ul className="flex items-center gap-6 md:gap-12">
              <li className=" text-base md:text-lg text-black">
                <Link to="/">Home</Link>
              </li>
              <li className="text-base font-bold md:text-lg text-black">
                <Link to="/Search">Search</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="items-center flex pt-16 pb-14 flex-col">
          <h1 className="font-bold text-center  pb-7 text-3xl text-black">
            What ingredients do you have?
          </h1>
          <div>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
                <img className="h-5 w-5" src={search} />
              </span>
              <input
                type="text"
                name="Search"
                placeholder="noodles"
                className="w-full md:w-[500px] text-black text-lg md:text-2xl py-3 pl-10 pr-4 bg-white rounded-2xl font-medium"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </label>
            <div></div>
          </div>
        </div>
      </div>

      <div className="pt-16 md:pt-28 px-4 md:px-32 pb-20 md:pb-72 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <div key={meal.idMeal}>
                <Link to={`/Pepper/${meal?.idMeal}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg font-medium">{meal.strMeal}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="">Searched Meal not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
