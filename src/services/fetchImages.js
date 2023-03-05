import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '32806243-dfe26fa8cb817022a28999782';
const PER_PAGE = 12;

export async function fetchContents({ nameQuery, page }) {
  console.log('nameQuery', nameQuery);
  // const config = {
  //   url: BASE_URL,
  //   params: {
  //     key: API_KEY,
  //     q: `${nameQuery}`,
  //     page,
  //     per_page: PER_PAGE,
  //     image_type: 'photo',
  //     orientation: 'horizontal',
  //     safesearch: 'true',
  //   },
  // };
  // try {
  //   return await axios(config);
  // } catch (error) {
  //   console.error(error);
  // }
  // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
  try {
    return await axios.get(
      `?q=${nameQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );
  } catch (error) {
    console.error(error);
  }
}
