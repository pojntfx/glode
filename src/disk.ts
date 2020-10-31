import IPFS from "ipfs";

export interface IDisk {
  open(): Promise<void>;

  close(): Promise<void>;
}

export class Disk implements IDisk {
  private ipfs?: Awaited<ReturnType<typeof IPFS["create"]>>;

  constructor(private repo: string) {}

  async open() {
    this.ipfs = await IPFS.create({
      repo: this.repo,
    });
  }

  async close() {
    await this.ipfs?.stop({
      timeout: 1000,
    });
  }
}
