export const callApi = async(apiEndpoint:string) => {
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
    const options = {
        method: "GET",
        headers: headers
    };
    return fetch(apiEndpoint, options)
        .then(async(response) => {
            return {
            status:response.status,
            body:response.headers.get('content-type')?.includes('json')? await response.json():''
            }
        })
        .catch(error => {
            return{status:500,
                   body:'error'
                 }
        });
}


export const postApi = async(apiEndpoint:string,body:string) => {
    const headers = new Headers();
    

    headers.append("Content-Type","application/json")
    headers.append("Accept",'application/json');
    headers.append("Access-Control-Allow-Origin","*");
    const options = {
        method: "POST",
        headers: headers,
        body:body
    };

    return fetch(apiEndpoint, options)
        .then(async(response) => {
            const contentType = response.headers.get("content-type");

            let res = "";

            if(contentType && contentType.indexOf("application/json") !== -1){
                res = await response.json();
            }
            return {
            status:response.status,
            body: res
            }
        })
        .catch(error => {
            return{status:500,
                   body:'error'
                 }
        });

}




