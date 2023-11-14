import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

export default function Home() {
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
