import { data } from "../../helper/data";
import "../Card/Card.scss";
const Card = () => {
  return (
    <div className="cardMain">
      {data.map((item) => {
        const { title, image, id, date, desc } = item;
        return (
          <div className="card" key={id}>
            <div className="cardimg">
              <img src={image} alt="" />
              <div className="card-title">
                <span>{title}</span>
              </div>
              <div className="card-date">
                <p>{date}</p>
              </div>
              <div className="card-desc">
                <p>{desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
