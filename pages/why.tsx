import Head from "next/head";
import Link from "next/link";

const Why: React.FC<{}> = () => {
  return (
    <div>
      <Head>
        <title>Why — The Olympics Score</title>
        <meta
          name="description"
          content="How the score of The Olympics Score works?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3 className="pt-3 pb-8  container mx-auto justify-center">
        <Link href="/" passHref>
          <a className="text-gray-800 italic  block text-center">
            See the score
          </a>
        </Link>
      </h3>

      <main className="container mx-auto flex flex-col justify-center max-w-lg px-2">
        <h4 className="font-bold text-lg pt-6 pb-2">Why?</h4>

        <p className="pb-4">
          The normal score is not fair enough. It implies that Gold medals are
          way better than the other. That instills the idea the winning is the
          only valid result. The reality is that the differences between firsts
          and seconds is usually measured in miliseconds and milimeters.
        </p>
        <p className="pb-4">
          The athletes in the Olympics are the best in the World. When someone
          finishes the final in the 8th positions means that they are the 8th
          best person alive in such sport. That is valuable enough to be proud
          of them. This ranking creates a score after combining all the medals
          and records. See the next section for details.
        </p>

        <h4 className="font-bold text-lg pt-6 pb-2">How?</h4>
        <p className="pb-4">
          The method could not be easier. Each medal has a value assigned: gold
          earns 3 points, silver 2 and bronze 1.
        </p>
        <p className="pb-4">
          And Olympic Record (OR) gives 2 extra points and a World Record (WR)
          gives 3. Every time a WR is broken it consitutes also an OR and a Gold
          medal. Effectively assigning 8 points for WR.
        </p>
        <p className="pb-4">
          These values then get combined to create the final score.
        </p>
        <p>10 bronze medals are better than 1 gold.</p>
        <p className="pb-4">1 WR is better than 2 gold medals.</p>

        <h4 className="font-bold text-lg pt-6 pb-2">Table</h4>
        <p className="pb-4">
          The table displays all the relevant data. From left to right: the Rank
          with the position change compared to the official ranking. The
          Team/NOC (National Olympic Comittee) name. The gold, silver and bronze
          medals. The World Records and the Olympics Records. And finally the
          computed score.
        </p>
      </main>
    </div>
  );
};

export default Why;
