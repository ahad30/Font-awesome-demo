import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <div className="recommended">
        <Button onClickHandler={handleClick} value="" title="Classic" />
        <Button onClickHandler={handleClick} value="Nike" title="Sharp" />
        <Button onClickHandler={handleClick} value="Adidas" title="Brands" />
        <Button onClickHandler={handleClick} value="Puma" title="Free" />
        
        </div>
      </div>
    </>
  );
};

export default Recommended;
