import "@/styles/globals.css";
import { FilmsProvider } from "context/FilmsProvider";

export default function App({ Component, pageProps }) {
  return (
    <FilmsProvider>
      <Component {...pageProps} />
    </FilmsProvider>

  );
}
