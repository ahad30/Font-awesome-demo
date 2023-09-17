
import Input from "../../components/Input";

function Style({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Style</h2>
      <div>
        <label className="sidebar-label-container"></label>

        <div className="font-style">
          <div>
            <Input
              handleChange={handleChange}
              value="solid"
              title="Solid"
              name="test"
            />
          </div>
          <div>
            <span className="count1">6,450</span>
          </div>
        </div>

        <div className="font-style">
          <div>
            <Input
              handleChange={handleChange}
              value="regular"
              title="Regular"
              name="test"
            />
          </div>

          <div>
            <span className="count2">4,450</span>
          </div>
        </div>

        <div className="font-style">
          <div>
            <Input
              title="Light"
              name="test"
            />
          </div>

          <div>
            <span className="count1">6,950</span>
          </div>
        </div>


        <div className="font-style">
          <div>
            <Input
              title="Thin"
              name="test"
            />
          </div>
          <div>
            <span className="count3">7,500</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Style;
