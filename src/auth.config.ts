import type { Provider } from "next-auth/providers";

export const authConfig = {
  session: {
    strategy: "jwt",
  },
  providers: [] as Provider[],
} as const;
