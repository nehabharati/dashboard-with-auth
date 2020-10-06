import axios from 'axios'

export function getBeerData(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
    })
} 