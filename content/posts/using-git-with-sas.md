---
title: GIT + SAS
date: 2021-02-19T09:00:00.000Z
layout: POST
path: /using-git-with-sas
description: Using GIT Workflows when building apps with SAS
category: SASjs
featuredImage: ../assets/targets.png
tags:
  - SAS
  - GIT
  - SASjs
---

Since 9.4m6 there are GIT functions in SAS, with further integration in DI Studio and SAS StudioV.

These all solve particular use cases, but perhaps not the most compelling one - how do I, as a SAS developer, collaborate with my team mates so that I can build my feature branch, test it, make a pull request, have it reviewed, run it automatically on merge to development, and onwards to the production branch?

The answer is - the same way as every other language.

Develop LOCALLY and execute (test) in the appropriate runtime (eg, the SAS server).

"That's great Allan," I hear you say, "but - how am I supposed to do all that? I don't want to import or copy paste all my files up to SAS each time I add back a missing semicolon"

We know - we built [Data Controller for SAS®](https://datacontroller.io) with 51 macros, 39 backend services, and deploy once to SAS 9 and 3 times to SAS Viya with every merge.

How?

Using SASjs.

With this framework you can enjoy all the flexibility of a modern IDE such as VS Code, and the raw execution grunt of a high powered SAS server with a few simple commands:

```bash
sasjs create yourProject -t jobs # create a project
sasjs add # add deployment target
sasjs cbd -t yourTarget # compile, build & deploy to Viya or SAS 9
```

If you don't want to wait for your entire project to build & deploy each time, you can compile and `sasjs run` individual jobs, or use the SASjs [VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=SASjs.sasjs-for-vscode) to execute code.

Once your code is tested and ready you can commit (ideally using the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) standard), push, and have your pull request reviewed following standard GIT workflow practices.

Docs: [https://cli.sasjs.io](https://cli.sasjs.io)

¬[](https://i.imgur.com/gIYp5OG.png)
