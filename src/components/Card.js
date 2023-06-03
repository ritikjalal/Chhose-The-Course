
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

function Card(props){

    let data=props.data;
    let likedcourse=props.likedcourse;
    let setLikedCourse=props.setLikedCourse;

    function statechanged(){
        //it is already liked
        if(likedcourse.includes(data.id)){
            setLikedCourse((prev)=>prev.filter((cid)=>(cid!==data.id)));
            toast.warning("courses unliked");
        }else{
            //it is not liked so we have to add in the array
            if(likedcourse.length===0){
                setLikedCourse([data.id]);
            }else{
                setLikedCourse((prev)=>[...prev,data.id]);
            }

            toast.success("liked sucessfully");
        }
    }

    return(
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>

           

            <div className='relative'>
                <img src={data.image.url} alt={data.image.alt}></img>

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center' >
                    <button onClick={statechanged}>

                        {
                            !likedcourse.includes(data.id)?
                            (<FcLikePlaceholder fontSize="1.75rem"/>):
                            (<FcLike fontSize="1.75rem"/>)
                        }
                        

                    </button>
                </div>


            </div>


            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6" >{data.title}</p>
                <p className='mt-2 text-white'>

                    {
                        data.description.length>100?
                        (data.description.substring(0,100)) + ".....":
                        (data.description)
                    }
                    
                </p>
            </div>



        </div>
    )
};

export default Card;