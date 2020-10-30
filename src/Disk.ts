export interface IDisk {
  Open: () => void;

  Close: () => void;
}

export class Disk implements IDisk {
  Open = () => {};

  Close = () => {};
}
