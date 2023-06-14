import fs from "fs";
import simpleGit from "simple-git";

const DATA_DIR = "data-repo";
const REPO_URL = "https://github.com/hackerhgl/blog-posts.git";

async function main() {
  try {
    // Create data directory if it doesn't exist
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR);
    }

    const git = simpleGit();

    // Check if git repo exists in data directory
    if (!fs.existsSync(`${DATA_DIR}/.git`)) {
      // Clone git repo
      console.log("Cloning data repo...");
      await git.clone(REPO_URL, DATA_DIR);
      console.log("Cloned data repo");
    }

    // Pull latest changes
    console.log("Pulling latest changes...");
    await git.cwd(DATA_DIR).pull();
    console.log("Pulled latest changes");

    // Copy content from data repo to posts directory
  } catch (e) {
    console.log(e);
  }
}

main();
