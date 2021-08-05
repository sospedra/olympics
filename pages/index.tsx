import Head from "next/head";
import { Anchor } from "../services/Anchor";
import { createFlag } from "../services/create-flag";
import { createName } from "../services/create-name";
import { createRanking } from "../services/create-ranking";
import { fetchMedals } from "../services/fetch-medals";
import { fetchRecords } from "../services/fetch-records";

const Home: React.FC<Await<ReturnType<typeof getStaticProps>>["props"]> = (
  props
) => {
  return (
    <div>
      <Head>
        <title>The Olympics Score</title>
        <meta
          name="description"
          content="A fair way to score the Olympics Games"
        />
      </Head>

      <main className="container flex flex-col items-center justify-center mx-auto">
        <table className="border-collapse table-auto">
          <thead>
            <tr className="sticky top-0 bg-gradient-to-b from-white via-white">
              <th className="pt-2 pb-5 pr-2 text-left">Rank</th>
              <th className="pt-2 pb-5 pr-2 text-left">Country/NOC</th>
              <th className="pt-2 pb-5 pr-2 text-center">
                <span  aria-label="Gold medal">🥇</span>
              </th>
              <th className="pt-2 pb-5 pr-2">
                <span  aria-label="Silver medal">🥈</span>
              </th>
              <th className="pt-2 pb-5 pr-2">
                <span  aria-label="Bronze medal">🥉</span>
              </th>
              <th className="pt-2 pb-5 pr-2 text-left">WR</th>
              <th className="pt-2 pb-5 pr-2 text-left">OR</th>
              <th className="pt-2 pb-5 pr-2 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {props.ranking.map((ranking, index) => {
              const diff = ranking.medal.classicRank - (index + 1);
              const trend = diff === 0 ? "eq" : diff > 0 ? "gt" : "lt";
              const trendColor = {
                gt: "text-green-500",
                lt: "text-red-500",
                eq: "",
              }[trend];

              return (
                <tr
                  key={ranking.noc}
                  className={`${index % 2 ? "bg-yellow-50" : ""} ${
                    index === 2 ? "border-b-2" : ""
                  }`}
                >
                  <td className="pr-2">
                    <span>{index + 1}</span>{" "}
                    <span className={`text-xs ${trendColor}`}>
                      {trend === "gt" && "▲"}
                      {trend === "lt" && "▼"}
                      {diff !== 0 && Math.abs(diff)}
                    </span>
                  </td>
                  <td className="py-1 pr-2 text-gray-900">
                    {createFlag(ranking.medal.name)}{" "}
                    {createName(ranking.medal.name)}
                  </td>
                  <td className="pr-2 text-center text-gray-600">
                    {ranking.medal.gold}
                  </td>
                  <td className="pr-2 text-center text-gray-600">
                    {ranking.medal.silver}
                  </td>
                  <td className="pr-2 text-center text-gray-600">
                    {ranking.medal.bronze}
                  </td>
                  <td className="pr-2 text-center text-gray-600">
                    {ranking.records.wr}
                  </td>
                  <td className="pr-2 text-center text-gray-600">
                    {ranking.records.or}
                  </td>
                  <td className="pr-2 text-center">
                    <b>{ranking.score}</b>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div
          className="flex justify-end w-full py-4"
          style={{ maxWidth: "475px" }}
        >
          <p className="pr-2 text-xs text-gray-700">
            Last updated at {new Date(props.updatedAt).toLocaleString()}
          </p>
        </div>
      </main>

      <footer className="container flex flex-col items-center py-8 mx-auto font-mono text-sm text-purple-900">
        <p>
          Made with{" "}
          <span className="text-xs" aria-label="love">
            💜
          </span>{" "}
          by <Anchor href="https://sospedra.me">@sospedra</Anchor>
        </p>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  const medals = await fetchMedals();
  const records = await fetchRecords();
  const ranking = createRanking(medals, records);
  const now = new Date().getTime();
  const revalidate = now <= 1628380800000 ? 600 : false;

  return {
    props: {
      ranking,
      updatedAt: now,
    },
    revalidate,
  };
}

export default Home;
