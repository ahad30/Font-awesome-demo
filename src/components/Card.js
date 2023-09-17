
const Card = ({ img, title }) => {
  return (
    <>
      <section className="card">
      <img src={img}  className="card-icon"/> 
        <div className="card-details">
          <h3 className="card-icon-title">{title}</h3>
        </div>
      </section>
    </>
  );
};

export default Card;
