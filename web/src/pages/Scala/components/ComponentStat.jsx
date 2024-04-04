
const ComponentStat = (item) => {

    console.log(item)

    return (

        <div className="max-w-sm p-6 bg-white border border-yellow-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">State: {item['item']['state']}</h5>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Count: {item['item']['count']}</p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Percentage: {item['item']['percentage']}%</p>
            
        </div>

    );
}

export default ComponentStat;