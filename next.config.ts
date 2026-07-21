import type { NextConfig } from "next";

// Next 16 removed the `eslint` config option, and `next build` no longer runs
// ESLint. Linting is its own step: `pnpm lint`, enforced in CI.
const nextConfig: NextConfig = {
  // Type errors still fail the production build.
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
