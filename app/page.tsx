import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";
import { getServerSideProps } from "next/dist/build/templates/pages";

function Home() {
  console.log("Rendering on the client side:", typeof window !== 'undefined');
  return (
    <div>
      
      <Featured />
      <CategoryList />
      <div className="flex gap-12 md:flex-col-reverse">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}


export default Home;