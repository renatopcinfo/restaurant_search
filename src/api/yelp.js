import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer O3y4yCKG-H7sedN4xr81C5LOEblM154yJeiE9DWOFzLTkxA3s6BpVefqKIKwDknzKoBdq0aoQeJKGdhwIWJRvVzzri6COJpmXkGmOYj9y4-KfHxPeBvYkVCBBCFbXnYx'
  }
});