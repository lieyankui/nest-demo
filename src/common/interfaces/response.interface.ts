export interface YokExceptionOption {
  code: number;
  message: string;
}
export interface YokHttpResponseBase {
  status: number;
  message: string;
  timestamp: string;
}

export interface YokHttpResultPaginate<T> {
  list: T[],
  total: number,
  pageIndex?: number, // start with 0
  pageSize?: number, // default 10
  totalPage?: number,
}

export type YokHttpSuccessResponse<T> = YokHttpResponseBase & {
  data: T | YokHttpResultPaginate<T>;
};

export type YokHttpErrorResponse = YokHttpResponseBase & {
  error: YokExceptionOption;
};
