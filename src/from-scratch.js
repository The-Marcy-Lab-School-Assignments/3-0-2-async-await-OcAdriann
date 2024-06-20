export const fetchHandler = async (url, option = {}) => {

    try {
        const response = await fetch(url, option)

        if(!response.ok) throw new Error(`Fetch failed. ${response.status} ${response.statusText}`)
            
        const isJson = (response.headers.get('content-type') || '').includes('application/json');

        if(isJson) {
            const jsonData = await response.json()
            return [jsonData, null]
        } else {
            const textData = await response.text()
            return [textData, null]
        }
    }

    catch(error) {
        console.warn(error)
        return [null, error]
    }
    
    return [{}, null]
};
