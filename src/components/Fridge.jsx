import { useContext } from "react";
import MyContext from "./ContextProvider";

const Fridge = (props) => {
    const context = useContext(MyContext);

    return (
        <>
            <h5>This is fridge, I contain {props.item}. do you want to drink, {context.k}</h5>
        </>
    )
}
export default Fridge;