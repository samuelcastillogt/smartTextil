import axios from 'axios'
import { URL_BASE } from '../utils/url'
import { useStore } from '../store'
const URL_NAME = "/products"
class DataService{
    getAll = async(addProducts)=>{
        try {
            const url = URL_BASE() + URL_NAME + "/all"
            const response = await axios.get(url)
            addProducts(response.data)
            // return response.data
        } catch (error) {
            console.log(error)
        }
    }
}
export const dataService = new DataService()