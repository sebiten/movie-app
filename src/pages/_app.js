import "@/styles/globals.css";
import { MovieProvider } from "context/Movieprovider";
export default function App({ Component, pageProps }) {
  return (
    <MovieProvider>
      <Component {...pageProps} />
    </MovieProvider>
  );
}
