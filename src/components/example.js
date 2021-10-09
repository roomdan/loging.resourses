import { useDispatch, useSelector } from "react-redux"
import { sumAndrest } from "../REDUX/action/sum.action";

const Producter = ()=>{

    const dispatch = useDispatch();
    const { sum } = useSelector(e=>e);

    return (
        <div>
            {sum.title} : {sum.num}
            <button onClick={()=>{dispatch(sumAndrest().sum)}}>more</button>
        </div>
    )
}

export default Producter