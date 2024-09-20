import { Objects, Search } from "../apiConfig"
import { callApi } from "../fetch"
import { GetObject, GetObjectIDs } from "../models";
import { WebResponseStatus } from "../WebResponseStatus";


export class SearchHandler {



    public static getAllContent = async (pageSize: number, pageNumber: number,objectIDs?:number[]): Promise<any> => {

        let data:{
            status:number,
            body:any
        }

        if(objectIDs && objectIDs.length > 0)
        {
            data = {
                status: WebResponseStatus.OK,
                body:{
                    total: objectIDs.length,
                    objectIDs: objectIDs
                }
            }
        }else{
         data = await callApi(Objects.getObjectIDs);
        }

        if (data && data.status === WebResponseStatus.OK) {
            let body: any = data.body;
            let response: GetObjectIDs = body;

            // Calculate the object IDs for the current page
            let currentPageObjectIds = response.objectIDs.slice(
                pageNumber === 1 ? 0 : ((pageNumber * pageSize) - pageSize),
                pageSize * pageNumber
            );

            // Use `map` to create an array of promises, and await them with `Promise.all`
            let objects: (GetObject | null)[] = await Promise.all(
                currentPageObjectIds.map(async (id) => {
                    let object: GetObject = await SearchHandler.getSingleObject(id);
                    return object && Object.keys(object).length > 0 ? object : null;
                })
            );

            // Filter out any null values that might have been added
            objects = objects.filter(object => object !== null) as GetObject[];

            return [WebResponseStatus.OK, response.total, objects,response.objectIDs];
        } else {
            return [WebResponseStatus.NotFound, 0, [],[]];
        }



    }

    public static searchContent = async (pageSize: number, 
        pageNumber: number, 
        searchTerm: string,
        showArtworkWithImages: boolean,
        showOnView: boolean,
        objectIDs?:number[]): Promise<any> => {

        let data:{
            status:number,
            body:any
        }

        
       
        if (searchTerm === "") {
            SearchHandler.getAllContent(pageSize, pageNumber);

        } else {
            
            let data:{
                status:number,
                body:any
            }
            let searchQuery = "";
            
            if(showArtworkWithImages)searchQuery = searchQuery+'hasImages=true&isPublicDomain=true&' ;
            if(showOnView)  searchQuery = searchQuery+'isOnView=true&'
            searchQuery = searchQuery + `q=${searchTerm}`;
            if(objectIDs && objectIDs.length > 0)
        {
            data = {
                status: WebResponseStatus.OK,
                body:{
                    total: objectIDs.length,
                    objectIDs: objectIDs
                }
            }
        }else{

            data = await callApi(Search.getSearch+searchQuery);
        }

            if (data && data.status === WebResponseStatus.OK) {
                let body: any = data.body;
                let response: GetObjectIDs = body;

                // Calculate the object IDs for the current page
                let currentPageObjectIds = response.objectIDs.slice(
                    pageNumber === 1 ? 0 : ((pageNumber * pageSize) - pageSize),
                    pageSize * pageNumber
                );

                // Use `map` to create an array of promises, and await them with `Promise.all`
                let objects: (GetObject | null)[] = await Promise.all(
                    currentPageObjectIds.map(async (id) => {
                        let object: GetObject = await SearchHandler.getSingleObject(id);
                        return object && Object.keys(object).length > 0 ? object : null;
                    })
                );

                // Filter out any null values that might have been added
                objects = objects.filter(object => object !== null) as GetObject[];

                return [WebResponseStatus.OK, response.total, objects, response.objectIDs];
            } else {
                return [WebResponseStatus.NotFound, 0, [],[]];
            }
        }


    }

    public static getSingleObject = async (objectID: number): Promise<any> => {

        let data = await callApi(Objects.getSpecificObject.replace('{objectID}', objectID.toString()));

        if (data && data.status === WebResponseStatus.OK) {
            let body: any = data.body;
            let response: GetObject = body;
            return response;
        } else {
            return {}
        }


    }
}