import { GlobalStyle } from './Globalstyle';
import { Layout } from './Layout';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import Button from './Button/Button';
// import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { fetchContents } from 'services/fetchImages';

export class App extends Component {
  state = {
    nameQuery: 'cat',
    page: 1,
    dataImages: [],
    isLoading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState);
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });

      const {
        data: { hits },
      } = await fetchContents(this.state);

      this.setState({
        dataImages: hits.map(hit => {
          const { id, largeImageURL, previewURL } = hit;
          return { id, largeImageURL, previewURL };
        }),
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleNameQuery = name => {
    console.log('handleNameQuery');
    this.setState({ nameQuery: name });
  };

  render() {
    // console.log('state in render()', this.state);
    const { isLoading } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        <Searchbar onSearchImage={this.handleNameQuery} />
        {isLoading && <Loader />}
        <ImageGallery
          images={this.state.dataImages}
          name={this.state.nameQuery}
        />
        <Button />
        {/* <Modal /> */}
      </Layout>
    );
  }
}
