export type TMetaResponse = {
  message?: string | null
  page?: number | null
  perPage?: number | null
  totalPage?: number | null
  nextPage?: number | null
  prevPage?: number | null
}

export type TMetaRequest = Omit<TMetaResponse, 'status' | 'message'> & {
  search?: string | null
  sortOrder?: string | null
  sortBy?: string | null
  filterBy?: string | null
  filterDateRange?: string | null
} 

export type TBaseResponse<T = undefined | null> = {
  data?: T
  meta?: TMetaResponse
}
