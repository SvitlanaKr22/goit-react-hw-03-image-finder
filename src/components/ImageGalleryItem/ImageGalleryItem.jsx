import { Item, ImageItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ idKey, urlImage, alt }) => (
  <Item key={idKey}>
    <ImageItem src={urlImage} alt={alt} />
  </Item>
);

export default ImageGalleryItem;
