interface ImageBuffer {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
    size: number;
}
export class OcrDto {
    constructor(public imageData: ImageBuffer) {}

    static create(imageData: ImageBuffer): [string?, OcrDto?] {
        if (!imageData) {
            return ["Missing or undefined 'image' property in the input object"];
        }

        return [undefined, new OcrDto(imageData)];
    }
}
