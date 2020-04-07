import {axiosCorreios} from '../plugins/axios'

export default {

    listar: () => {
        return axiosCorreios.get('encomenda')
    }
}