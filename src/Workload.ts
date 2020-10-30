import { EPermission } from "./Permission";

export interface IWorkload {
  repo: string;
  binary: string;
  permissions: EPermission[];
}
