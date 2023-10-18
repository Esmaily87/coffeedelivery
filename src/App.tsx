import { ThemeContextProvider } from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import{ Router } from './Router';
import { GlobalStyle } from "./styles/global"
//import { CycleContextProvider} from "./contexts/CyclesContext";



export function App() {
  

  return (
    <ThemeContextProvider>
    <BrowserRouter> 

     {/* <CycleContextProvider> */}
         <Router/>
     {/* </CycleContextProvider> */}
   
   </BrowserRouter>
   
<GlobalStyle/>
</ThemeContextProvider>
  )
}
