import "./index.css";
import { useNavigate } from "react-router-dom";

function Cards(props) {
    const {thumbnail, title,  description, id, price } = props
    const navigate = useNavigate()
    
  return (
    <>
    <div onClick={()=>navigate(`/CardDetails/${id}`)} className="Main">
        <div className="image">
            <img alt="" src={thumbnail}/>
        </div>
        <div className="CardBody">
            <h5>Rs {price}</h5>
            <h5 className="title">{title}</h5>
            <p>{description}</p>
        </div>
    </div>
    </>
  );
}

export default Cards;
