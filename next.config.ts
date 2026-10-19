import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 개발 서버용 Turbopack CSS 설정 (next dev에서만 적용됨)
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
