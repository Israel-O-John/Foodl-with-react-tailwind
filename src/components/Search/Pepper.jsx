import Foodl from "/src/assets/icons/Foodl.svg";
import imgOne from "/src/assets/images/imgOne.png";
import category from "/src/assets/icons/category.svg";
import location from "/src/assets/icons/location.svg";
import tags from "/src/assets/icons/tags.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Pepper = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    axios.get(url).then((response) => {
      setMeals(response.data.meals[0]);
      meals;
    });
  }, [id]);
  console.log(meals);

  return (
    <div>
      <div className="w-full w-full bg-[url('/src/assets/images/Bg.png')] ">
        <div className="w-10/12 mx-auto pt-6 flex justify-between items-center">
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
        <div className="mx-auto items-center flex gap-4 justify-center">
          <img
            src={meals?.strMealThumb}
            alt={meals?.strMeal}
            className="relative top-10 rounded-lg w-[260px] h-[241px]"
          />
          <div className="flex items-center  justify-center flex-col">
            <h1 className="font-bold text-4xl text-black pb-6">
              {meals?.strMeal}
            </h1>
            <div className="flex gap-4">
              <div className="shadow-inner shadow-white opacity-100 py-3 px-6">
                <div className="flex gqp-2 items-center">
                  <img src={category} alt="category" />
                  <p>Category</p>
                </div>
                <h3>{meals?.strCategory}</h3>
              </div>
              <div className="shadow-inner shadow-white opacity-100 py-3 px-6">
                <div className="flex gqp-2 items-center">
                  <img src={location} alt="area" />
                  <p>Area</p>
                </div>
                <h3>{meals?.strArea}</h3>
              </div>
              <div className="shadow-inner shadow-white opacity-100 py-3 px-6">
                <div className="flex gqp-2 items-center">
                  <img src={tags} alt="tags" />
                  <p>Tags</p>
                </div>
                <h3>{meals?.strTags}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* my code changes */}
      <div className="flex flex-col gap-11 pt-[120px] pb-[150px]">
        <div className="shadow-2xl mx-auto pt-[27px] pl-[33px] pb-[39px] pr-[150px] rounded-[10px]">
          <h1 className="font-bold text-[32px] text-black pb-[26px]">
            Ingredients
          </h1>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 group">
              <div className="flex border border-[#909090] px-[16px] text-[#909090] hover:text-black  rounded-[30px] py-[8.5px]  hover:bg-[#FF9F59] cursor-pointer  items-center gap-3 ">
                <p className="text-base  ">{meals?.strIngredient1}</p>
                <p className="border text-xs text-white px-[8px] py-[2px] rounded-[30px] bg-[#909090] group-hover:text-[#FF9F59]  group-hover:bg-white">
                  3/4 cup
                </p>
              </div>
              <p className="border border-[#909090] px-[16px] rounded-[30px] py-[8.5px] text-base text-[#909090] hover:bg-[#FF9F59] cursor-pointer hover:text-black">
                {meals?.strIngredient2}
              </p>
              <p className="border border-[#909090] px-[16px] rounded-[30px] py-[8.5px] text-base text-[#909090] hover:bg-[#FF9F59] cursor-pointer hover:text-black">
                {meals?.strIngredient3}
              </p>
              <p className="border border-[#909090] px-[16px] rounded-[30px] py-[8.5px] text-base text-[#909090] hover:bg-[#FF9F59] cursor-pointer hover:text-black">
                {meals?.strIngredient4}
              </p>
            </div>
            <div className="flex gap-5 group ">
              <div className="flex gap-3 border rounded-[30px] text-[#909090] px-[16px] py-[8.5px]  hover:text-black hover:bg-[#FF9F59] cursor-pointer ">
                <p className="text-base  ">{meals?.strIngredient5}</p>
                <p className="text-xs px-[8px] py-[2px] border text-white rounded-[30px] bg-[#909090] group-hover:bg-white group-hover:text-[#FF9F59]    ">
                  1/2 Teaspoon
                </p>
              </div>
              <p className="border border-[#909090] px-[16px] rounded-[30px] py-[8.5px] text-base text-[#909090] hover:bg-[#FF9F59] cursor-pointer hover:text-black">
              {meals?.strIngredient6}
              </p>
              <p className="border border-[#909090] px-[16px] rounded-[30px] py-[8.5px] text-base text-[#909090] hover:bg-[#FF9F59] cursor-pointer hover:text-black">
              {meals?.strIngredient7}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[590px]">
          <h1 className="font-bold text-[32px] text-black pb-[32px]">
            Instructions
          </h1>
          <div>
            <p className="text-base pb-[16px]">
            {meals?.strInstructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pepper;
