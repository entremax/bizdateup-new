import { apiUri } from "../utils"
import { EndpointProps } from "./endPointTypes"

const baseUrl=apiUri().v0

// const callApi=async(uri:string)=>{
//   const res=await fetch(apiUri().v0+`/startup/fetchStartupByType?tos=${type}`,{
//     headers:{
//       Authorization:tokenKey?"Bearer "+tokenKey:""
//     }
//   })
//     .then((res)=> {
//       return res.json()
//     })
//     .catch((e)=> {
//       console.log(e)
//       throw new Error("Something went wrong check server terminal")
//     })
// }
/**
 * Extends a base URL by appending query parameters.
 *
 * @param {Array} params - An optional array of key-value pairs representing the query parameters.
 * @returns {String} - The extended URL with query parameters.
 */
const extendUrl = (params?: { [key: string]: string }[]): string => {
  console.log(params)
  const query = params
    ?.map((param) => Object.entries(param).map(([key, value]) => `${key}=${value}`).join('&'))
    .join('&');
  return `?${query}`;
};


/**
 * Calculates the endpoint for checking interest.
 * @param {Object} props - The endpoint properties.
 * @param {boolean} props.baseUrlExist - Indicates if a base URL exists.
 * @param {Object} props.params - The parameters to be included in the endpoint.
 * @returns {string} - The calculated endpoint URL.
 */
export const isInterested= ({baseUrlExist= false, params}:EndpointProps): string => {
  const baseEndpoint = "/marketing/interest/check";
  if(baseUrlExist){
    return baseEndpoint+(params&&extendUrl([params]))
  }else{
    return baseUrl+baseEndpoint+(params&&extendUrl([params]))
  }
}
/**
 * Adds interest to the marketing endpoint URL.
 *
 * @param {boolean} baseUrlExist - Specifies whether the base URL exists. Default value is false.
 * @param {EndpointProps} params - Optional parameters for the endpoint.
 * @returns {string} - The URL for the marketing/interest/add endpoint.
 */
export const addInterest= (baseUrlExist: boolean = false, params?: EndpointProps): string => (baseUrlExist?"/marketing/interest/add":baseUrl+"/marketing/interest/add")