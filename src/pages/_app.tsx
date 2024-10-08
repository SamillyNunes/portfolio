import { ProjectsProvider } from "@/context/ProjectsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <ProjectsProvider>
    <Component {...pageProps} />
  </ProjectsProvider>;
}
