interface PaginationQuery {
  limit?: number;
  offset?: number;
}

export class DtoGetUsers implements PaginationQuery {
  limit?: number | undefined;

  order?: {
    username: 'ASC';
    email: 'DESC';
  };
}
