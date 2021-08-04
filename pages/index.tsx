import Head from "next/head";
import Link from "next/link";
import { createFlag } from "../services/create-flag";
import { createName } from "../services/create-name";
import { createRanking } from "../services/create-ranking";
import { fetchMedals } from "../services/fetch-medals";
import { fetchRecords } from "../services/fetch-records";

const Medal: React.FC<{ value: number }> = (props) => {
  const color = ["", "bg-yellow-400", "bg-gray-300", "bg-red-400"][props.value];
  return (
    <span
      className={`${color} mx-2 rounded-full w-5 h-5 flex text-xs items-center justify-center`}
    >
      <span>{props.value}</span>
    </span>
  );
};

const Home: React.FC<Await<ReturnType<typeof getStaticProps>>["props"]> = (
  props
) => {
  return (
    <div>
      <Head>
        <title>The Olympics Score</title>
        <meta
          name="description"
          content="A more fair way to score the Olympics Games"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3 className="pt-3 pb-8  container mx-auto justify-center">
        <Link href="/why" passHref>
          <a className="text-gray-800 italic  block text-center">
            Because the normal count isn&apos;t fair enough{" "}
            <sup className="not-italic">&#9432;</sup>
          </a>
        </Link>
      </h3>

      <main className="container mx-auto flex flex-col items-center justify-center">
        <table className="table-auto border-collapse">
          <thead>
            <tr className='sticky top-0 bg-white'>
              <th className="pr-2 py-2 text-left">
                Rank
              </th>
              <th className="pr-2 py-2 text-left">Team/NOC</th>
              <th className="pr-2 py-2 text-center">
                <Medal value={1} />
              </th>
              <th className="pr-2 py-2">
                <Medal value={2} />
              </th>
              <th className="pr-2 py-2">
                <Medal value={3} />
              </th>
              <th className="pr-2 py-2 text-left">WR</th>
              <th className="pr-2 py-2 text-left">OR</th>
              <th className="pr-2 py-2 text-left">Score</th>
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
                  <td className="pr-2 py-1 text-gray-900">
                    {createFlag(ranking.medal.name)} {createName(ranking.medal.name)}
                  </td>
                  <td className="pr-2 text-gray-600 text-center">
                    {ranking.medal.gold}
                  </td>
                  <td className="pr-2 text-gray-600 text-center">
                    {ranking.medal.silver}
                  </td>
                  <td className="pr-2 text-gray-600 text-center">
                    {ranking.medal.bronze}
                  </td>
                  <td className="pr-2 text-gray-600 text-center">
                    {ranking.records.wr}
                  </td>
                  <td className="pr-2 text-gray-600 text-center">
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
          className="flex justify-end py-4 w-full"
          style={{ maxWidth: "475px" }}
        >
          <p className="text-xs pr-2 text-gray-700">
            Last updated at {new Date(props.updatedAt).toLocaleString()}
          </p>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const medals = await fetchMedals();
  const records = await fetchRecords();
  const ranking = createRanking(medals, records);

  return {
    props: {
      ranking,
      updatedAt: new Date().getTime(),
    },
    revalidate: 600, // 10 minutes
  };
}

export default Home;
