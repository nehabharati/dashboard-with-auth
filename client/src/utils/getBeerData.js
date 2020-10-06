import axios from 'axios'

export function getBeerData(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(data => {
                resolve(data)
            })
    })
} 