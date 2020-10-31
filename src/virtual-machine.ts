export interface IVirtualMachine {
  open(): void;

  close(): void;
}

export class VirtualMachine implements IVirtualMachine {
  open(): void {
    throw new Error("Method not implemented.");
  }

  close(): void {
    throw new Error("Method not implemented.");
  }
}
