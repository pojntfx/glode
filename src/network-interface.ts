import { IIPFSConsumer, IPFSConsumer } from "./ipfs-consumer";

export interface INetworkInterface extends IIPFSConsumer {}

export class NetworkInterface
  extends IPFSConsumer
  implements INetworkInterface {}
