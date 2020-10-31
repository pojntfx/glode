import { IIPFSConsumer, IPFSConsumer } from "./ipfs-consumer";
import { v4 } from "uuid";

describe("IPFSConsumer lifecycle", () => {
  let ipfsConsumer: IIPFSConsumer;
  let repoName = "";

  beforeEach(async () => {
    repoName = `/tmp/glode-testing-ipfs-consumer-${v4()}}`;

    ipfsConsumer = new IPFSConsumer(repoName);
  });

  it("should open", async () => {
    await ipfsConsumer.open();
  }, 10000);

  afterEach(async () => {
    await ipfsConsumer.close();
  });
});
