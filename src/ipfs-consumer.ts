import IPFS from "ipfs";

export interface IIPFSConsumer {
  open(): Promise<void>;

  close(): Promise<void>;
}

export class IPFSConsumer implements IIPFSConsumer {
  protected ipfs?: Awaited<ReturnType<typeof IPFS["create"]>>;

  constructor(private repo: string) {}

  async open() {
    this.ipfs = await IPFS.create({
      repo: this.repo,
    });
  }

  async close() {
    await this.ipfs?.stop({});
  }
}
