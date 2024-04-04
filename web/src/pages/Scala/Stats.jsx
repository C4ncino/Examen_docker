import { useEffect, useState } from 'react';
import { useAPI } from '../../hooks/useApi';

import PageTemplate from '../../page/PageTemplate';
import ComponentStat from './components/ComponentStat';

const Stats = () => {

    const[statistics, setStatistics] = useState([]);

    const {
        get
    } = useAPI();

    const get_stats = async () => {

        const data = await get('stat', '')

        setStatistics(data)

    }

    useEffect(() => {
        get_stats()
    }, [])

    return (
        <PageTemplate> 
            <div className="min-h-screen">
                <h1 className='text-center text-3xl text-yellow-300'>STATISTICS</h1>

                <h5 className="text-center m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total: {statistics['count']}</h5>

                <div className='flex flex-wrap justify-center gap-4 mt-10'>

                    {
                        statistics['count'] === 0 ? 
                        <p className='text-center text-2xl text-yellow-300'>No stats</p> 
                        :
                        statistics['stats']?.map((item) => (
                            <ComponentStat item={item} />
                        ))
                    }

                </div>
            </div>
        </PageTemplate>
    );
}

export default Stats;