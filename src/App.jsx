import Products from "./components/Products";
import data from "./callApi";

function App() {
  return (
    <>
      <div className="flex flex-wrap items-center  ">
        {data.map((product) => {
          return (
            <Products product={product} key={product.unique_id}></Products>
          );
        })}
      </div>
    </>
  );
}

export default App;
