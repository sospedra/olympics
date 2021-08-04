import tscraper from 'table-scraper'

export type Record = {
  type: 'WR' | 'OR',
  noc: string
}

const fetchRecordBySport = async (url: string) => {
  const [table] = await tscraper.get(url)
  const tokyoRecords = table.filter((row) => {
    const isFromTokyo = row.Name && row.Name.startsWith('New')
    const isWRorOR = ['WR', 'OR'].includes(row.Type)
    return isFromTokyo && isWRorOR
  })
  return tokyoRecords.map<Record>((record) => ({
    type: record.Type as Record['type'],
    noc: record.Name.split('New\n')[1].slice(0, 3)
  }))
}

export const fetchRecords = async () => {
  const urlList = [
    'https://olympics.com/tokyo-2020/olympic-games/en/results/archery/records.htm',
    'https://olympics.com/tokyo-2020/olympic-games/en/results/athletics/records.htm',
    'https://olympics.com/tokyo-2020/olympic-games/en/results/canoe-sprint/records.htm',
    'https://olympics.com/tokyo-2020/olympic-games/en/results/cycling-track/records.htm',
    'https://olympics.com/tokyo-2020/olympic-games/en/results/modern-pentathlon/records.htm',
    'https://olympics.com/tokyo-2020/olympic-games/en/results/rowing/records.htm',
    'https://olympics.com/tokyo-2020/olympic-games/en/results/shooting/records.htm',
    'https://olympics.com/tokyo-2020/olympic-games/en/results/sport-climbing/records.htm',
    'https://olympics.com/tokyo-2020/olympic-games/en/results/swimming/records.htm',
    'https://olympics.com/tokyo-2020/olympic-games/en/results/weightlifting/records.htm',
  ]
  let records: Record[] = []

  for (let i = 0; i < urlList.length; i++) {
    records = records.concat(await fetchRecordBySport(urlList[i]))
  }

  return records
}
