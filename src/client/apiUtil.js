import axios from "axios"

class API {
    constructor(resource) {
        this.resource = resource
        this.url = 'http://localhost:5000/'
        this.baseurl = `${this.url}${this.resource}`
    }

    getAll = async () => 
        await (await axios.get(`${this.baseurl}`)).data

    create = async (body) =>
        await (await axios.post(`${this.baseurl}`, body)).data

    delete = async (id) =>
        await (await axios.delete(`${this.baseurl}${id}`)).data
}

export default API;
