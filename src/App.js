import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useEffect, useState } from 'react';
import {apiUrl,filterData} from "./data";
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

function App() {
  const[courses,setCourses]=useState([]);

  const[loading,setLoading]=useState(true);

  const[filter,setFilter]=useState(filterData[0].title);


  async function datafetch(){

    setLoading(true);
    try {
      const res=await fetch(apiUrl);
      const result= await res.json();

      setCourses(result.data);

    } catch (error) {
      toast.error("Something wrong");
    }
    setLoading(false);
  }

  //useEffect
  useEffect(()=>{
    datafetch();
  },[]);


  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

        <div>
          <Navbar/>
        </div>

        <div className="bg-bgDark2">
          <Filter filter={filter} setFilter={setFilter} filterData={filterData}/>
        </div>

        <div className='w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading?(<Spinner/>):(<Cards courses={courses} filter={filter}/>)
          }
        </div>
    </div>
  );
}

export default App;
