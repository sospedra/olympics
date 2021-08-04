import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="container mx-auto flex justify-center items-center flex-col pt-4">
        <h1 className="text-xl font-bold">The Olympics Score</h1>
      </header>

      <Component {...pageProps} />
      
      <footer className="container mx-auto flex flex-col items-center text-sm  text-purple-900 font-mono py-8">
        <p className="pb-2">
          Data collected from{" "}
          <a href="https://olympics.com/tokyo-2020/">olympics.com</a>
        </p>
        <p>
          Made with{" "}
          <span className="text-xs" aria-label="love">
            💜
          </span>{" "}
          by{" "}
          <a className="text-green-700 underline" href="https://sospedra.me">
            @sospedra
          </a>
        </p>
      </footer>
    </>
  );
}
export default MyApp;
