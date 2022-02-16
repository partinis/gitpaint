const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    // if (github.context.eventName !== "pull_request") {
    //     // The core module on the other hand let's you get
    //     // inputs or create outputs or control the action flow
    //     // e.g. by producing a fatal error
    //     core.setFailed("Can only run on pull requests!");
    //     return;
    // }

    // get the inputs of the action. The "token" input
    // is not defined so far - we will come to it later.
    const githubToken = core.getInput("token");

    // Now read in the files with the function defined above
    const userName = core.getInput("github_user_name");
    console.log(githubToken+"-"+userName);

}

// Our main method: call the run() function and report any errors
run().catch(error => core.setFailed("Workflow failed! " + error.message));
