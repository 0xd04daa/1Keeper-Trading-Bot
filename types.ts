export interface TokenData {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: number; // Percentage
  volume: string;
  marketCap: string;
  txns: number;
  created: string;
  image: string;
}

export type TimeFrame = '1m' | '5m' | '1h' | '6h' | '24h';
export type Chain = 'SOL' | 'BSC';
export type Category = 'New' | 'Hot';
