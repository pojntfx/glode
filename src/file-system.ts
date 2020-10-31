import { IIPFSConsumer, IPFSConsumer } from "./ipfs-consumer";

export interface IFileSystem extends IIPFSConsumer {}

export class FileSystem extends IPFSConsumer implements IFileSystem {}
