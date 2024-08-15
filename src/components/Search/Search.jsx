import React, { useState, useEffect } from "react";
import Foodl from "/src/assets/icons/Foodl.svg";
import search from "/src/assets/icons/search.svg";
import imgOne from "/src/assets/images/imgOne.png";
import { Link } from "react-router-dom";
import axios from "axios";

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
            <ul className="flex gap-16">
              <li className=" text-lg text-black">
                <a href="/">Home</a>
              </li>
              <li className="text-bold font-bold font-b text-black">
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
                className="text-black text-2xl py-4 pl-10 pr-96 flex items-center gap-3 bg-white rounded-2xl font-medium"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </label>
            <div></div>
          </div>
        </div>
      </div>
      <div className="pt-28 px-32 pb-72 w-full flex gap-8">
        <div className="grid grid-cols-4 gap-8">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <div key={meal.idMeal}>
                <Link to={`/Pepper/${meal?.idMeal}`}>
                  <div className="max-w-64 bg-white rounded-2xl shadow-2xl shadow-black">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="relative -top-5 w-[240px] h-[229px]"
                    />
                    <p className="text-lg pl-5 pb-7">{meal.strMeal}</p>
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
