const Footer = ({ products }) => {
  let totalItem = 0;
  products.map((product) => {
   totalItem += product.quantity * product.price;

    return <div key={products.id}>{totalItem}</div>;
  });
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>${totalItem}</span>
          </li>
          <li>
            Tax <span>$5.00</span>
          </li>
          <li className="total">
            Total <span>${totalItem +5}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
};
