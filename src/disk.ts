export interface IDisk {
  open(): void;

  close(): void;
}

export class Disk implements IDisk {
  open(): void {
    throw new Error("Method not implemented.");
  }

  close(): void {
    throw new Error("Method not implemented.");
  }
}
