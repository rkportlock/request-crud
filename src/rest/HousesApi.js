const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    create = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(house)
            });
            return resp;
        } catch(e){
            console.log("error with create", e);
        }
    }

    get = async () => {
        try{
        const resp = await fetch(HOUSES_ENDPOINT);
        const data = await resp.json();
        return data; 
        } catch(e) {
            console.log("opps, looks like there's an issue fetching", e);
        }
    }


    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e){
            console.log("opps, looks like updating houses had an issue", e);
        }
    }

    delete = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e){
            console.log("opps, looks like deleting house had an issue", e);
        }
    }
}

export const housesApi = new HousesApi(); 