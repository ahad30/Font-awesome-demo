import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title price-title">Featured</h2>
        <label className="sidebar-label-container"></label>

        <div className="font-style">
          <div>
            <Input
              handleChange={handleChange}
              title="New in V6"
              name="test2"
            />
          </div>
          <div>
            <span className="count4">12,950</span>
          </div>
        </div>


        <div className="font-style">
          <div>
            <Input
              handleChange={handleChange}
              title="Sponsored"
              name="test2"
            />
          </div>
          <div>
            <span className="count6">5,950</span>
          </div>
        </div>


        <div className="font-style">
          <div>
            <Input
              handleChange={handleChange}
              title="Staff Favorites"
              name="test2"
            />
          </div>
          <div>
            <span className="count7">913</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
