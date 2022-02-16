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

    // the context does for example also include information
    // in the pull request or repository we are issued from
    const context = github.context;
    const repo = context.repo;
    const pullRequestNumber = context.payload.pull_request.number;

    // The Octokit is a helper, to interact with
    // the github REST interface.
    // You can look up the REST interface
    // here: https://octokit.github.io/rest.js/v18
    const octokit = github.getOctokit(githubToken);

    // Get all comments we currently have...
    // (this is an asynchronous function)
    const { data: comments } = await octokit.issues.listComments({
        ...repo,
        issue_number: pullRequestNumber,
    });

    // ... and check if there is already a comment by us
    const comment = comments.find((comment) => {
        return (
            comment.user.login === "github-actions[bot]" &&
            comment.body.startsWith("## Result of Benchmark Tests\n")
        );
    });

}

// Our main method: call the run() function and report any errors
run().catch(error => core.setFailed("Workflow failed! " + error.message));
