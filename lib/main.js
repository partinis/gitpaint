"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const github = require("@actions/github");
const loadSite_1 = require("./loadSite");
const generateSvg_1 = require("./generateSvg");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        // if (github.context.eventName !== "pull_request") {
        //     // The core module on the other hand let's you get
        //     // inputs or create outputs or control the action flow
        //     // e.g. by producing a fatal error
        //     core.setFailed("Can only run on pull requests!");
        //     return;
        // }
        (0, generateSvg_1.generateSvg)(
        // await loadSite(core.getInput("github_user_name")),
        // core.getInput("text"), core.getInput("svg_file_name")
        yield (0, loadSite_1.loadSite)("jasineri"), "JASINERI", "graph.svg");
    });
}
// Our main method: call the run() function and report any errors
run().catch((error) => core.setFailed("Workflow failed! " + error.message));
