import { v4 } from "uuid";
import { FileSystem, IFileSystem } from "./file-system";

describe("FileSystem", () => {
  let fileSystem: IFileSystem;
  let repoName = "";

  beforeEach(async () => {
    repoName = `/tmp/glode-testing-file-system-${v4()}}`;

    fileSystem = new FileSystem(repoName);

    await fileSystem.open();
  });

  it("should not be null", async () => {
    const fs = await fileSystem.getFileSystem();

    expect(fs).not.toBeNull();
  });

  afterEach(async () => {
    await fileSystem.close();
  });
});

describe("FileSystem lifecycle", () => {
  let fileSystem: IFileSystem;
  let repoName = "";

  beforeEach(async () => {
    repoName = `/tmp/glode-testing-ipfs-file-system-${v4()}}`;

    fileSystem = new FileSystem(repoName);
  });

  it("should open", async () => {
    await fileSystem.open();
  });

  afterEach(async () => {
    await fileSystem.close();
  });
});
