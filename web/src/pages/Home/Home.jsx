import { useEffect, useState } from 'react';
import { useAPI } from '../../hooks/useApi';

import PageTemplate from '../../page/PageTemplate';
import Package from './components/Package';

const Home = () => {

    const[packages, setPackages] = useState([]);
    const[_package, _setPackage] = useState('');
    const[render, reRender] = useState(true)

    const {
        get,
        post
    } = useAPI();

    const get_packages = async () => {
        
        const data = await get('paquetes')

        setPackages(data)        
    }

    const search = async () => {
       
        const data = await get('paquete/' + _package)

        if (data === false){
            setPackages([])   
        }
        else{
            setPackages(data)
        }
    }

    const add = async () => {
        
        const data = await post('paquete', JSON.stringify({}))

        get_packages()
    }

    useEffect(() => {
        get_packages()
    }, [render])

    return (
        <PageTemplate> 
            <div className="min-h-screen">
                <h1 className='text-center text-3xl text-yellow-300'>PACKAGES</h1>

                <div className='flex flex-row justify-center items-center mt-10'>
                    <input 
                        id='_package'
                        type='number'
                        value={_package}
                        onChange={(e) => _setPackage(e.target.value)}
                    />
                    <button 
                        className='bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded ml-2'
                        onClick={() => search()}
                        >
                        Search
                    </button>

                    <button 
                        className='bg-green-300 hover:bg-green-400 text-black font-bold py-2 px-4 rounded ml-2'
                        onClick={() => add()}
                        >
                        
                        +

                    </button>
                </div>

                <div className='flex flex-wrap justify-center gap-4 mt-10'>

                    {
                        packages.length === 0 ? 
                        <p className='text-center text-2xl text-yellow-300'>No packages found</p> 
                        :
                        packages.map((item) => (
                            <Package item={item} key={item['id']} render={render} reRender={reRender}/>
                        ))
                    }

                </div>

            </div>
        </PageTemplate>
    );
}

export default Home;