import { FileSystem } from "./file-system";
import { NetworkInterface } from "./network-interface";
import { VirtualMachine } from "./virtual-machine";
import { IWorkload } from "./workload";

export interface INode {
  open(): void;

  execute(workload: IWorkload): void;

  close(): void;
}

export class Node implements INode {
  private virtualMachine?: VirtualMachine;
  private networkInterface?: NetworkInterface;
  private fileSystem?: FileSystem;

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
