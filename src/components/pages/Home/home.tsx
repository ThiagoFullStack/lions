
import Header from "../../pages/Home/Header";
import Climas from "../../pages/Home/Main/climas";
import Equipamentos from "../../pages/Home/Main/equipamentos";
import Jeep from "../../pages/Home/Main/detalhes";
import Footer from "../../pages/Home/Footer";


 export default function Home() {

  return (
    <div>
      <Header />
      <Climas />
      <Equipamentos />
      <Jeep />
      <Footer />
    </div>
  )
}