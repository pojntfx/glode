import { Disk } from "./disk";
import { v4 } from "uuid";

describe("disk lifecycle", () => {
  let disk: Disk;
  let repoName = "";

  beforeEach(async () => {
    repoName = `/tmp/glode-testing-${v4()}}`;

    disk = new Disk(repoName);
  });

  it("should open", async () => {
    await disk.open();
  });

  afterEach(async () => {
    await disk.close();
  });
});
