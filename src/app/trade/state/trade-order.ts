import {OrderType} from "../../model/enum/order-type";
import {TradingPair} from "../../model/enum/trading-pair";

export interface TradeOrder {
  user: string;
  currencyPair: TradingPair;
  orderType: OrderType;
  amount: number;
  limitPrice: number;
}
