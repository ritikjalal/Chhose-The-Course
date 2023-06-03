import { useState } from "react";
import Card from "./Card"

function Cards(props){

    let category=props.filter;

    const[likedcourse,setLikedCourse]=useState([]);

    let courses=props.courses;

    let coursearray=[];


    function fetchCourse(){

        if(category==="All"){
            Object.values(courses).forEach((coursecategory)=>{
                coursecategory.forEach((course)=>{
                    coursearray.push(course);
                })
            })
            return coursearray;
        }else{
            //only specific category will be passed
            return courses[category];
        }
        
    }


    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {!courses?(
                <div>
                    <p>No data found</p>
                </div>
            ):(fetchCourse().map((data)=>{
                return(<Card key={data.id} data={data} likedcourse={likedcourse} setLikedCourse={setLikedCourse}/>)
            }))}

        
        </div>
    )

};

export default Cards;