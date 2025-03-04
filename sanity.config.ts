"use client";

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId:'14cs491j',
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2025-02-17",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas }
})

export default config