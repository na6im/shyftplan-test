export interface Position {
  color: string;
  id: number;
  name: string;
}

export interface Event {
  endsAt: Date;
  id: number;
  startsAt: Date;
  position: Position;
}

export interface Pagination {
  count: number;
  limit: number;
  offset: number;
}
