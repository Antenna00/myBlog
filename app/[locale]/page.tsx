import Featured from "../components/featured/Featured";
import CategoryList from "../components/categoryList/CategoryList";
import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/Menu";


function Home( {searchParams} : {searchParams: { page:string }
} ) {
  // console.log("Rendering on the client side:", typeof window !== 'undefined');
  
  const page = parseInt(searchParams.page) || 1;

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex gap-12 md:flex-col-reverse">
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  );
}


export default Home;