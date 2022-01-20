export interface Order {

  id: number,
  user: string,
  currencyPair: string,
  orderType: string,
  amount: number,
  filledamount: number,
  limitPrice: number,
  averagePrice: number,
  status: string,
  creationDate: string,
  filledDate: string

}
