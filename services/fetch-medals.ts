import tscraper from "table-scraper";

export type Medal = {
  name: string;
  noc: string;
  gold: number;
  silver: number;
  bronze: number;
  classicRank: number;
};

export const fetchMedals = async (): Promise<Medal[]> => {
  const url =
    "https://olympics.com/tokyo-2020/olympic-games/en/results/all-sports/medal-standings.htm";
  const [table] = await tscraper.get(url);
  return table.map((row) => ({
    bronze: parseInt(row["4"]),
    classicRank: parseInt(row["Rank"]),
    gold: parseInt(row["2"]),
    name: row["Team/NOC"],
    noc: row["NOCCode"],
    silver: parseInt(row["3"]),
  }));
};
