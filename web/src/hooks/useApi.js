export const useAPI = () => {
    const get_endpoint = (api, end_point) => {
        var api_url = ''

        if (api === 'api') {
            api_url = import.meta.env.VITE_API_URL
        }
        else if (api === 'stat') {
            api_url = import.meta.env.VITE_API_STATS_URL
        }

        return api_url + end_point
    }

    const get = async (api, end_point) => {
        const response = await fetch(get_endpoint(api, end_point), {
            method: 'GET'
        })

        if (response.ok) {
            const data = await response.json()

            return data
        }
        else {
            return false
        }

    }

    const post = async (api, end_point, body) => {
        const response = await fetch(get_endpoint(api, end_point), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })

        if (response.ok) {
            const data = await response.json()

            return data
        }
        else {
            return false
        }

    }

    const put = async (api, end_point, body) => {

        const response = await fetch(get_endpoint(api, end_point), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })

        if (response.ok) {
            const data = await response.json()

            return data
        }
        else {
            return false
        }

    }

    return {
        get_endpoint,
        get,
        post,
        put
    }
}