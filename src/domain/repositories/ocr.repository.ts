import { OcrDto } from "../";
import { IOcrEntity } from "../../ts";

export interface IOcrRepository {
    scan(scanOcrDto: OcrDto): Promise<IOcrEntity>;
}
