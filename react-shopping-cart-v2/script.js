const PRODUCTS = [
  {
    id: 1,
    name: "PRODUCT ITEM NUMBER 1",
    description: "Description for product item number 1",
    price: 5.99,
    quantity: 2,
    image: "https://via.placeholder.com/200x150",
  },
  {
    id: 2,
    name: "PRODUCT ITEM NUMBER 2",
    description: "Description for product item number 2",
    price: 9.99,
    quantity: 1,
    image: "https://via.placeholder.com/200x150",
  },
];

const App = () => {
  const [products, setProducts] = React.useState(PRODUCTS);

  return (
    <main>
      <Header products={products}/>

      <Body products={products} />
      <Footer products={products} />


      
      
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
