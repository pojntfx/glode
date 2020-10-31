import { IWorkload } from "./workload";

export interface INode {
  open(): void;

  execute(workload: IWorkload): void;

  close(): void;
}

export class Node implements INode {
  open(): void {
    throw new Error("Method not implemented.");
  }

  execute(workload: IWorkload): void {
    throw new Error("Method not implemented.");
  }

  close(): void {
    throw new Error("Method not implemented.");
  }
}
