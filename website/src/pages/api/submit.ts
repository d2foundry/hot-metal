import { Octokit as BaseOctokit } from "octokit";
import { createPullRequest } from "octokit-plugin-create-pull-request";

import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";

const Octokit = BaseOctokit.plugin(createPullRequest);

export default async function submit(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).send("Unauthorized");
    return;
  }
  const octokit = new Octokit({
    auth: session.accessToken,
  });

  // Maybe this should be a PATCH /shrug
  if (req.method === "POST" && req.body) {
    const pr = await octokit.createPullRequest({
      owner: process.env.GITHUB_ORG as string,
      repo: process.env.GITHUB_REPO as string,
      title: "Update sources.json",
      body: "Updating sources.json from the Hot Metal app.",
      head: `source-edit-${Date.now()}`,
      base: "main",
      update: true,
      changes: [
        {
          /* optional: if `files` is not passed, an empty commit is created instead */
          files: {
            "data/api/sources.json": JSON.stringify(req.body, undefined, 2),
          },
          commit: "updating sources.json",
        },
      ],
    });

    return res.send(pr);
  }

  res.status(404).send("Unsupported Method");
}
