const Header = ({ products }) => {
  let totalQuantity = 0;
  products.map((product) => {
   totalQuantity += product.quantity;

    return <div key={products.id}>{totalQuantity}</div>;
  });

  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className="count">{totalQuantity} items in the bag</span>
    </header>
  );
};
