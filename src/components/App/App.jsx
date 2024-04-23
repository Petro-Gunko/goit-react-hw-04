import { useState, useEffect } from "react";
import { fetchImages } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchForm from "../SearchBar/SearchBar";
import Loading from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

 
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

 
  const openModal = () => {
  setIsOpen(true)
}


  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  }

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = (image) => {
   setSelectedImage({
    url: image.urls.regular,
    description: image.alt_description,
  });
    openModal()
};

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  return (
    <div className={css.container}>
      <SearchForm onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {loading && <Loading />}
      {images.length > 0 && (
        <ImageGallery onClickImage={handleImageClick} items={images} />
      )}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}

      <ImageModal
        dataImage={selectedImage}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
