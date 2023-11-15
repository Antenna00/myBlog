import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default Home;