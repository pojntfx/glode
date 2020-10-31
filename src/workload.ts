import { EPermission } from "./permission";

export interface IWorkload {
  repo: string;
  binary: string;
  permissions: EPermission[];
}
