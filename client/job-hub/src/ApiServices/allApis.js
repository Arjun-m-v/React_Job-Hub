import base_url from "./base_url";
import commonApi from "./commonApi";

//to get company job details...
export const getCompanies=async(header)=>{
    return await commonApi(header,"",`${base_url}/company/`,"GET")
}

export const getSpecificCompany=(id,header)=>{
    return commonApi(header,"",`${base_url}/company/${id}/`,"GET")
}