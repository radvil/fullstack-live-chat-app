export interface IPaginationResult<Model> {
  items: Model[];
  meta?: IPaginationResultMeta;
  // linkRef: IPaginationResultLink;
}

export interface IPaginationResultMeta {
  totalItems: number;
  itemsCount: number;
  itemsPerPage: number | null;
  totalPages: number;
  currentPage: number;
}

export interface IPaginationResultLink {
  current: string;
  first: string;
  previous: string;
  next: string;
  last: string;
}
