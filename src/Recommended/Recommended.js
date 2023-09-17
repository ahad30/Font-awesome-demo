import Button from "../components/Button";
import "./Recommended.css";
import Image1 from '../components/assets/Regular/marketing-mix.png';
import Image2 from '../components/assets/Regular/red-flag.png';
import Image3 from '../components/assets/Regular/flash.png';
import Image4 from '../components/assets/Regular/apps.png';
import Image5 from '../components/assets/Regular/menu.png';
import Image6 from '../components/assets/Regular/list.png';

const Recommended = ({ handleClick }) => {
  return (
    <>

      <div className="recommended">

        <div>
          <img src={Image1} className="img" />
          <div>
          <Button onClickHandler={handleClick} value="" type='checkbox' title="Classic" />
          </div>
        </div>

        <div>
          <img src={Image1} className="img" />
          <div> <Button onClickHandler={handleClick} value="Sharp" title="Sharp" />
          </div>
        </div>


        <div>
          <img src={Image2} className="img" />
          <div>
            <Button onClickHandler={handleClick} value="Brand" title="Brands" />
          </div>
        </div>

        <div>
          <img src={Image3} className="img" />
          <div>
            <Button onClickHandler={handleClick}  title="Free" />
          </div>
        </div>

        <div>
          <img src={Image4} className="side-img" />
        </div>
        <div>
          <img src={Image5} className="side-img" />
        </div>
        <div>
          <img src={Image6} className="side-img" />
        </div>

        <div>
          <select className="featured-version">
            <option>Featured</option>
            <option>Alphabetical</option>
          </select>
        </div>

        <div>
          <select className="featured-version">
            <option>5.4.1</option>
            <option>6.4.1</option>
            <option>All Version</option>
          </select>
        </div>


      </div>

    </>
  );
};

export default Recommended;
