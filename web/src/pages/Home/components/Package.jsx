import { useAPI } from "../../../hooks/useApi";


const Package = (item, render, reRender) => {

    const {
        put
    } = useAPI();

    const changeStatus = async (id, status) => {
        
        const data = await put('api', 'paquete/' + id, JSON.stringify({
            'estado': status
        }))

        reRender(!render)

    }

    return (

        <div className="max-w-sm p-6 bg-white border border-yellow-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Package {item['item']['id']}</h5>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Status: {item['item']['estado']}</p>
            <button 
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => changeStatus(item['item']['id'], 'Enviado')}
                >
                +
            </button>
        </div>

    );
}

export default Package;