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

export interface Employee {
  firstName: string;
  lastName: string;
  image: string;
}

export interface EventDetail {
  endsAt: Date;
  id: number;
  startsAt: Date;
  position: Position;
  employees: Employee[];
}
