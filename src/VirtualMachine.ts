export interface IVirtualMachine {
  Open: () => void;

  Close: () => void;
}

export class VirtualMachine implements IVirtualMachine {
  Open = () => {};

  Close = () => {};
}
