import Category from "./Category"
import ProductListItem from "./ProductListItem"

function ProductList({products}) {

    // filter my products array by category. i am going to render one ProductListItem per category that matches the appropriate category

    function filterProducts(category){
        return products.filter(product => product.type === category).map(filteredProd => <ProductListItem key={filteredProd.id} filteredProd={filteredProd}/>)
    }

    // console.log(filterProducts("Sporting Goods"))
    // console.log(filterProducts("Electronics"))

  return (
      <>
      <Category category="Sporting Goods"/>
      {/* this is where the Sporting Goods ProductListItems will go */}
     {filterProducts("Sporting Goods")}
      <Category category="Electronics"/>
      {/* this is where the Electronics ProductListItems will go */}
      {filterProducts("Electronics")}
      </>
  )
}

export default ProductList