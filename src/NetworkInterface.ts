export interface INetworkInterface {
  Open: () => void;

  Close: () => void;
}

export class NetworkInterface implements INetworkInterface {
  Open = () => {};

  Close = () => {};
}
