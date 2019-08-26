import * as axios from 'axios';


export function searchUsers (searchTerm) {
    return axios.get('https://api.github.com/users?q=' + searchTerm);
}

