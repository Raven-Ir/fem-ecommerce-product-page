import { useState } from "react";
import Content from "./components/Content";
import NavBar from "./components/NavBar";

function App() {
  const [cartQuantity, setCartQuantity] = useState(null);

  return (
    <div className="font-main ">
      <NavBar quantity = { cartQuantity }/>
      <Content cartQuantity = {setCartQuantity}/>
      <div className="flex justify-center md:text-lg text-xs">
        <div className="grid-cols-1 place-items-center p-8">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className=" hover:text-project-orange-prim">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/Raven-Ir" target="_blank" rel="noreferrer" className=" hover:text-project-orange-prim">Eirini Tididou</a>.
        </div>
      </div>
    </div>
    
  );
}

export default App;
