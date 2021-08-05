import { Medal } from "./fetch-medals"
import { Record } from "./fetch-records"

export const createRanking = (medals: Medal[], records: Record[]) => {
  const ranking = medals.map((medal) => {
    const fromMedals = medal.gold * 3 + medal.silver * 2 + medal.bronze
    const recordsByNOC = records.filter(
      ({ noc }) => noc === medal.noc.toUpperCase()
    )
    const fromRecords = recordsByNOC.reduce((memo, { type }) => {
      const score = type === "WR" ? 3 : 2
      return memo + score
    }, 0)
    const recordsCount = recordsByNOC.reduce(
      (memo, { type }) => {
        const wr = memo.wr + (type === "WR" ? 1 : 0)
        const or = memo.or + (type === "OR" ? 1 : 0)

        return { wr, or }
      },
      { wr: 0, or: 0 }
    )

    return {
      medal,
      noc: medal.noc,
      records: recordsCount,
      score: fromMedals + fromRecords,
    }
  })

  ranking.sort((a, b) => {
    return b.score - a.score
  })

  return ranking
}
