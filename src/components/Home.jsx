
import Kitchen from "./Kitchen";
import { ContextProvider } from "./ContextProvider";
const Home = () => {


    
    return (
        <ContextProvider>
            <div style={{color:'#0047AB',background:'lightgrey',}}>
            <h2>Take a deep breath!</h2>
            <Kitchen name='Kamala'/>
        </div>
        </ContextProvider>
        
        
    );
}
export default Home;
