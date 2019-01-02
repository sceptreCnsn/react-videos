import axios from 'axios';

const KEY = "AIzaSyBWsA72yaDsP-nOipShPDKoTZ9qskKrGVk";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});