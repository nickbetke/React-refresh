import { useContext } from "react";
import Fridge from "./Fridge";
import MyContext from "./ContextProvider";


const Kitchen = () => {
    const context = useContext(MyContext);
    const { name } = context;
    return (
        <>
            <h3>Hi from Kitchen, {name}</h3>
            <Fridge item='beer' name={'ab'}/>
        </>
    )
}
export default Kitchen;