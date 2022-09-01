/* 
  Tipos gerados com o site: https://transform.tools/json-to-typescript
*/

export interface IapiPaginationRequest {
  page: number
  totalPages: number
  itemsPerPage: number
  totalItems: number
  items: IapiPaginationItem[]
}

export interface IapiPaginationItem {
  id: number
  image: string
  name: string
  price: number
  discount: number
  priceMember: number
  priceNonMember: number
  type: string
  classification: string
  size?: string
  rating: number
  avaliations?: number
  country: string
  region: string
  flag: string
  sommelierComment: string
  volume?: string
  Rating?: number
}
