import Searchform from 'components/Searchform/Searchform';
import { Header } from './Searchbar.styled';

const Searchbar = ({ onSearchImage }) => (
  <Header>
    <Searchform onSearch={onSearchImage}></Searchform>
  </Header>
);

export default Searchbar;
