import { IDisk } from "./Disk";
import { INetworkInterface } from "./NetworkInterface";
import { IVirtualMachine } from "./VirtualMachine";
import { IWorkload } from "./Workload";

export interface INode {
  Open: () => void;

  Execute: (workload: IWorkload) => void;

  Close: () => void;
}

export class Node implements INode {
  private virtualMachine: IVirtualMachine;
  private networkInterface: INetworkInterface;
  private disk: IDisk;

  Open: () => {};

  Execute: (workload: IWorkload) => {};

  Close: () => {};
}
