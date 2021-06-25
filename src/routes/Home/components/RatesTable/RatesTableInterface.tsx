export interface RatesTableProps {
  rows: RateTableRows[]
}

interface RateTableRows {
  timestamp: Date,
  rate: number
}