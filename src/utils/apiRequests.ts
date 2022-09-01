import { IapiPaginationRequest } from "./ApiRequests.d"

export async function apiPagination(page = 1, perPage=10): Promise<IapiPaginationRequest>{
  const url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=${perPage}`
  const response = await fetch(url)
  return await response.json() as IapiPaginationRequest
}