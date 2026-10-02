#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "jsremotely",
  boardId: "jsremotely-official",
  domain: "jsremotely.com",
  npmName: "zc-jsremotely-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
