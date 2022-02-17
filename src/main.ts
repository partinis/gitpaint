const core = require("@actions/core");
// const github = require("@actions/github");
import { loadSite } from "./loadSite";
import { generateSvg } from "./generateSvg";

async function run() {
  generateSvg(
    await loadSite(core.getInput("github_user_name")),
    core.getInput("text"),
    core.getInput("svg_file_name")
  );
}

// Call the run() function and report any errors
run().catch((error) => core.setFailed("Workflow failed! " + error.message));
