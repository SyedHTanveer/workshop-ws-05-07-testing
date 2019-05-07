/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const STATISTICS_API_URL = 'https://www.googleapis.com/youtube/v3/videos';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyC-0Ecu9iiw1ew4MUzQ5r_b_UuYbJX90Rk';

export const viewCountByVideo = (videoId) => {
  const params = {
    key: API_KEY,
    id: videoId,
    part: 'statistics',
  };
  return new Promise((resolve, reject) => {
    axios.get(STATISTICS_API_URL, { params })
      .then((response) => {
        resolve(Number(response.data.items[0].statistics.viewCount));
      })
      .catch((error) => {
        console.log(`youtube statistics api error: ${error}`);
        reject(error);
      });
  });
};

export const youtubeSearch = (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};
