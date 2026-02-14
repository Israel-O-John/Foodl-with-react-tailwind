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

  return (
    <div>
      <div className="w-full  bg-[url('/src/assets/images/Bg.png')] ">
        <div className="w-10/12 mx-auto pt-6 flex justify-between items-center">
          <img src={Foodl} alt="Foodl" />
          <div>
            <ul className="flex items-center gap-6 md:gap-12">
              <li className=" text-sm md:text-lg text-black">
                <Link to="/">Home</Link>
              </li>
              <li className="text-sm font-bold md:text-lg text-black">
                <Link to="/Search">Search</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto items-center flex flex-col md:flex-row gap-8 justify-center text-center md:text-left px-4">
          <img
            src={meals?.strMealThumb}
            alt={meals?.strMeal}
            className="relative top-10 rounded-lg w-[260px] h-[241px]"
          />
          <div className="flex items-center  justify-center flex-col">
            <h1 className="font-bold text-4xl text-black pb-6">
              {meals?.strMeal}
            </h1>
            <div className="flex gap-4 flex-col md:flex-row">
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
      <div className="flex flex-col gap-11 pt-16 md:pt-[120px] pb-16 md:pb-[150px] px-4">
        <div className="shadow-2xl mx-auto pt-6 px-4 md:px-8 pb-8 rounded-[10px] border w-11/12 md:w-auto">
          <h1 className="font-bold text-[32px] text-black pb-[26px]">
            Ingredients
          </h1>
          <div className="flex flex-col gap-6 flex-wrap">
            <div className="flex flex-wrap gap-3 group">
              <div className="flex flex-wrap gap-3">
                {Array.from({ length: 20 }, (_, i) => {
                  const ingredient = meals?.[`strIngredient${i + 1}`];
                  const measure = meals?.[`strMeasure${i + 1}`];

                  if (!ingredient) return null;

                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 border border-[#909090] px-4 py-2 rounded-[30px] text-sm text-[#909090] hover:bg-[#FF9F59] hover:text-black cursor-pointer"
                    >
                      <span>{ingredient}</span>
                      {measure && (
                        <span className="text-xs bg-[#909090] text-white px-2 py-1 rounded-full">
                          {measure}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[590px]">
          <h1 className="font-bold text-[32px] text-black pb-[32px]">
            Instructions
          </h1>
          <div>
            <p className="text-base pb-[16px]">{meals?.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pepper;
