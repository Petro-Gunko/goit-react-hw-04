import css from './ImageCard.module.css'

export default function ImageCard({ url, altImage, onClick}) {
    return (
      <>
        <img
          onClick={onClick}
          className={css.image}
          src={url.small}
          alt={altImage}
        />
      </>
    );
}

