import type { AppProps } from "next/app";
import { useScrollRestoration } from "../utils/useScrollRestoration";

export default function App({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router);

  return <Component {...pageProps} />;
}
