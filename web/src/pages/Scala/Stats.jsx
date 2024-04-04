import { useAPI } from '../../hooks/useApi';

import PageTemplate from '../../page/PageTemplate';

const Stats = () => {

    const {
        get
    } = useAPI();

    return (
        <PageTemplate> 
            <div className="min-h-screen">
                <h1 className='text-center text-3xl text-yellow-300'>STATISTICS</h1>
            </div>
        </PageTemplate>
    );
}

export default Stats;