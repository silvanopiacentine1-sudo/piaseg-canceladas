import type { NextConfig } from "next";

// O painel de canceladas foi incorporado ao sistema de apólices (piaseg-apolices) em 2026-10-09.
// Este endereço só redireciona para a aba de canceladas de lá.
const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/:path*", destination: "https://piaseg-apolices.vercel.app/canceladas", permanent: false }];
  },
};

export default nextConfig;
