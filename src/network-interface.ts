export interface INetworkInterface {
  open(): void;

  close(): void;
}

export class NetworkInterface implements INetworkInterface {
  open(): void {
    throw new Error("Method not implemented.");
  }

  close(): void {
    throw new Error("Method not implemented.");
  }
}
