import "./ShopingForm.css";
const Shopingform = () => {
  return (
    <>
      <div className="container  mainDiv">
        <div className="row">
          <div className="form-group">
            <label>Quantity</label>
            <input className="form-control col-6" placeholder="Quantity" />
          </div>
          <div className="form-group">
            <select
              className="form-select f mb-3 col-6"
              aria-label=".form-select-lg example"
            >
              <option selected> --select menu--</option>
              <option value="vegFruit">Veg and Fruit</option>
              <option value="Bekary">Bread and Pasta</option>
              <option value="Dairy">Dairy Product</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <input className="form-control" />
        </div>
      </div>
    </>
  );
};

export default Shopingform;
