import { v4 } from "uuid";
import { INetworkInterface, NetworkInterface } from "./network-interface";

describe("NetworkInterface lifecycle", () => {
  let networkInterface: INetworkInterface;
  let repoName = "";

  beforeEach(async () => {
    repoName = `/tmp/glode-testing-ipfs-network-interface-${v4()}}`;

    networkInterface = new NetworkInterface(repoName);
  });

  it("should open", async () => {
    await networkInterface.open();
  });

  afterEach(async () => {
    await networkInterface.close();
  });
});
