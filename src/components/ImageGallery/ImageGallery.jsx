import { List } from './ImageGallery.styled';
import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, name }) => (
  <List>
    {images.map(({ id, previewURL }) => (
      <ImageGalleryItem key={id} urlImage={previewURL} alt={`photo ${name}`} />
    ))}
  </List>
);

export default ImageGallery;
