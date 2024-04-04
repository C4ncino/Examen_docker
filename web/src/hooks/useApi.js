export const useAPI = () => {
    const get_endpoint = (end_point) => {
        const api_url = 'http://api:5000/'

        return api_url + end_point
    }

    const get = async (end_point) => {
        const response = await fetch(get_endpoint(end_point), {
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

    const post = async (end_point, body) => {
        const response = await fetch(get_endpoint(end_point), {
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

    const put = async (end_point, body) => {

        const response = await fetch(get_endpoint(end_point), {
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