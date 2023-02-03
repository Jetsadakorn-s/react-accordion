import { useState } from "react";
import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai"

const SingleContent = ({title,description})=>{
    const [showContent,setShowContent]=useState(false)
    return(
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setShowContent(!showContent)}>
                    {showContent ? <AiOutlinePlusCircle/> : <AiOutlineMinusCircle/>}
                </button>
            </header>
            {showContent && <p>{description}</p>}
        </article>
    )
}
export default SingleContent;