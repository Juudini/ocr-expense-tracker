import { IOcrDatasource } from "../../domain/datasources/ocr.datasource";
import { IOcrEntity } from "../../ts";
import { IOcrRepository } from "../../domain/repositories/ocr.repository";
import { OcrDto } from "../../domain";
export class OcrRepositoryImpl implements IOcrRepository {
    constructor(private readonly ocrDatasource: IOcrDatasource) {}
    scan = (scanOcrDto: OcrDto): Promise<IOcrEntity> => {
        return this.ocrDatasource.scan(scanOcrDto);
    };
}
