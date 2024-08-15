import React, {useState} from 'react'
import Foodl from '/src/assets/icons/Foodl.svg'
import search from '/src/assets/icons/search.svg'
import imgOne from '/src/assets/images/imgOne.png'
import {Link} from 'react-router-dom';



export const Search = () => {

  const [origin, setOrigin] = React.useState("");
  const [meals, setMeals] = React.useState([]);



  const fetchData = async () => {
    const url='https://www.themealdb.com/api/json/v1/1/search.php?f=a'
    try{
      const response = await fetch(url);
      const json = await response.json();
      if (json.meals) {
        setMeals(json.meals); 
      } else {
        setMeals([]); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  React.useEffect(() => {
    if (origin) { 
      fetchData();
    }
  }, [origin]); 


  return (
    <div>
        <div className="w-full bg-[url('/src/assets/images/Bg.png')]">
          <div className='w-10/12 mx-auto pt-6  flex justify-between items-center'>
              <img src={Foodl} alt="Foodl" />
              <div>
                  <ul className='flex gap-16'>
                      <li className=' text-lg text-black'><a href="/">Home</a></li>
                      <li className='text-bold font-bold font-b text-black'><Link to='/Search'>Search</Link></li>
                  </ul>
              </div>
          </div>
          <div className='items-center flex pt-16 pb-14 flex-col'>
            <h1 className='font-bold text-center  pb-7 text-3xl text-black'>What ingredients do you have?</h1>
            <div>
              <label className='relative block'>
                <span className='sr-only'>Search</span>
                <span className='absolute inset-y-0 left-0 flex items-center pl-2 '>
                  <img className='h-5 w-5' src={search}/>
                </span>
                <input type='text' name='Search' placeholder='noodles' className='text-black text-2xl py-4 pl-10 pr-96 flex items-center gap-3 bg-white rounded-2xl font-medium' 
                 value={origin}
                 onChange={(e) => setOrigin(e.target.value)}
                />
              </label>
              <div>
              {meals.length > 0 ? (
                meals.map(meal => ( <div className='bg-black opacity-50' key={meal.idMeal}>
                <Link to='/Pep'><h2 className='text-xl '>{meal.strMeal}</h2></Link>
              </div>  ))
              ) : (
              <p className=''></p>
             )}
          
              </div>
            </div>
          </div>
        </div>
        <div className='pt-28 px-32 pb-72 w-full flex gap-8'>
          <Link to="/Pepper">
            <div>
              <div className='max-w-64 shadow-2xl shadow-black bg-white rounded-2xl shrink-0'>
              <div className=' h-44 max-w-64'>
              <img src={imgOne} alt="Food Image" className='relative -top-5 w-full -top-5' />
              </div>
                <p className='text-lg pl-5 pb-7'>Pepperoni Pizza</p>
              </div>
            </div>
          </Link>
          
          <div >
            <div className='max-w-64 bg-white rounded-2xl shadow-2xl shadow-black'>
            <div className=' h-44 max-w-64'>
            <img src={imgOne} alt="Food Image" className='relative -top-5 w-full -top-5' />
            </div>
              <p className='text-lg pl-5 pb-7'>Pepperoni Pizza</p>
            </div>
          </div>
          
          <div>
            <div className='max-w-64 bg-white rounded-2xl shadow-2xl shadow-black'>
            <div className='h-44 max-w-64'>
            <img src={imgOne} alt="Food Image" className='relative -top-5 w-full' />
            </div>
              <p className='text-lg pl-5 pb-7'>Pepperoni Pizza</p>
            </div>
          </div>
          <div>
            <div className='max-w-64 bg-white rounded-2xl  shadow-2xl shadow-black'>
            <div className=' h-44 max-w-64'>
            <img src={imgOne} alt="Food Image" className='relative -top-5 w-full -top-5' />
            </div>
              <p className='text-lg pl-5 pb-7'>Pepperoni Pizza</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Search