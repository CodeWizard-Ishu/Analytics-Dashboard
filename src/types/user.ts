export interface User {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
  region: string;
  registrationDate: string;
}
