import Head from "next/head";
import { Anchor } from "../services/Anchor";

const Manifesto: React.FC<{}> = () => {
  return (
    <div>
      <Head>
        <title>Manifesto — The Olympics Score</title>
        <meta
          name="description"
          content="How the ranking of The Olympics Score works?"
        />
      </Head>

      <main className="container flex flex-col justify-center max-w-lg px-2 mx-auto">
        <h4 id="understand" className="pt-6 pb-2 text-lg font-bold">
          Understand the score
        </h4>
        <p className="pb-4">
          The table displays all the relevant data to understand how teams are
          performing. From left to right: the Rank with the position change
          compared to the official ranking. The NOC (
          <Anchor href="https://en.wikipedia.org/wiki/National_Olympic_Committee">
            National Olympic Committee
          </Anchor>
          ) or the rightful country name. The gold, silver and bronze medals.
          The World Records and the Olympics Records. At the end, the total
          computed score.
        </p>

        <h4 id="why" className="pt-6 pb-2 text-lg font-bold">
          Why?
        </h4>

        <p className="pb-4">
          The{" "}
          <Anchor href="https://olympics.com/tokyo-2020/olympic-games/en/results/all-sports/medal-standings.htm">
            normal score
          </Anchor>{" "}
          is not fair enough. It implies that Gold medals are way better than
          the others. Which instills the idea that winning is the one and only
          valid result. However, that is a far cry from reality. Differences
          between firsts and seconds are usually measured in milliseconds,
          millimeters, tiny gaps in general.
        </p>
        <p className="pb-4">
          The athletes in the Olympics are the best in the World. Getting the
          8th position means being the 8th <b>best sportsperson alive</b> in
          such discipline — let that sink in. This ranking creates a fair score
          after
          <b>combining all the medals and records</b>. See the next section for
          details.
        </p>

        <h4 className="pt-6 pb-2 text-lg font-bold">How?</h4>
        <p className="pb-4">
          The method could not be easier. Each medal has a value assigned: gold
          earns 3 points, silver 2 and bronze 1.
        </p>
        <p className="pb-4">
          An{" "}
          <Anchor href="https://olympics.com/tokyo-2020/olympic-games/en/results/all-sports/records.htm">
            Olympic Record (OR)
          </Anchor>{" "}
          gives 2 extra points and a{" "}
          <Anchor href="https://www.worldathletics.org/records/by-category/world-records">
            World Record (WR)
          </Anchor>{" "}
          gives 3 — breaking a record means being the best in history! Remember
          that every time a WR is achieved it constitutes an OR and a Gold medal
          as well. Effectively assigning 8 points for each WR.
        </p>
        <p className="pb-4">
          Finally, these values get combined to create the total score. For
          example:
        </p>
        <p>4 bronze medals are better than 1 gold.</p>
        <p className="pb-4">1 WR is better than 2 gold medals.</p>
      </main>

      <footer className="container flex flex-col items-center py-8 mx-auto font-mono text-sm text-purple-900">
        <p className="">
          Data collected from{" "}
          <Anchor href="https://olympics.com/tokyo-2020/">olympics.com</Anchor>
        </p>
        <p>
          Code available on{" "}
          <Anchor href="https://github.com/sospedra/olympics">Github</Anchor>
        </p>
        <p>
          Made with{" "}
          <span className="text-xs" aria-label="love">
            💜
          </span>{" "}
          by <Anchor href="https://sospedra.me">@sospedra</Anchor>
        </p>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Manifesto;
