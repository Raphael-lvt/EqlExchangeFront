import { TransferDto } from "./transferDto";

export interface ResultTransferDto {
    transferDto: TransferDto,
    transfertOk: boolean,
    message: string
  }