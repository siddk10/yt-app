import axios from 'axios'

const KEY="AIzaSyBu-Kka_mEiHgFQn_O0fKDB8pckP0A3G4U"
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults:5,
        key:KEY
    }
})

 