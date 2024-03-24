import { TBaseResponse, TMetaResponse } from "@/modules/base";

export const metaResponsePrefix = <T = undefined | null>({
  data,
  meta,
}: {
  data?: T;
  meta?: TMetaResponse;
}): TBaseResponse<T> => {
  return {
    data,
    meta,
  };
};

export function calculateTotalPages(totalItems: number, itemsPerPage: number): number {
  return Math.ceil(totalItems / itemsPerPage);
}
