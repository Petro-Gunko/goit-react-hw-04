import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onClickImage }) {
  
  return (
    <ul className={css.container}>
      {items.map((item) => (
        <li key={item.id} className={css.item}>
          <div className={css.imageContainer}>
            <ImageCard
              url={item.urls}
              altImage={item.alt_description}
              onClick={() => onClickImage(item)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
