import { OcrDto } from "../dtos";
import { IOcrEntity } from "../../ts";

export interface IOcrDatasource {
    scan(scanOcrDto: OcrDto): Promise<IOcrEntity>;
}
