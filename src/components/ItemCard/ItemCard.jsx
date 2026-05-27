import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  return (
    <div className="itemcard">
      <img
        src={item.link}
        alt={item.name}
        className="itemcard__image"
        onClick={() => onCardClick?.(item)}
      />
      <h2 className="itemcard__title">{item.name}</h2>
    </div>
  );
}

export default ItemCard;
