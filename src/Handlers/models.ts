export interface GetObjectIDs {
    total: number,
    objectIDs: number[]
}

export interface GetObject{
    objectID:number,
    isHighlight:boolean,
    isPublicDomain:boolean,
    primaryImage:string,
    primaryImageSmall:string,
    additionalImages:string[],
    department:string,
    objectName:string,
    objectDate:string,
    title:string,
    culture:string,
    period:string,
    artistDisplayName:string,
    artistDisplayBio:string,
    artistSuffix:string,
    artistBeginDate:string,
    artistEndDate:string,
    objectURL:string

}