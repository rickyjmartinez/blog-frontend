import { Header} from "./Header.jsx"; 
import { Footer } from "./Footer.jsx";
import { Content } from "./Content.jsx";
import { BrowserRouter } from "react-router-dom"



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Content /> 

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
