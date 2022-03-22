export interface User {
  id: string;
  username: string | null;
  lists?: string[] | null;
}
