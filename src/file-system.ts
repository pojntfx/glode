import { IIPFSConsumer, IPFSConsumer } from "./ipfs-consumer";
import { WasmFs } from "@wasmer/wasmfs";

export interface IFileSystem extends IIPFSConsumer {
  getFileSystem(): Promise<WasmFs>;
}

export class FileSystem extends IPFSConsumer implements IFileSystem {
  private fs?: WasmFs;

  async open() {
    await super.open();

    this.fs = new WasmFs();
  }

  async getFileSystem() {
    if (!this.fs)
      throw new Error("Can't call getFileSystem before calling open");

    return this.fs;
  }
}
