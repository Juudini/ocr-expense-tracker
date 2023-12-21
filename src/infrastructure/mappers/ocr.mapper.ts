import { CustomError, OcrEntity } from "../../domain";
// export class OcrMapper {
//     static ocrEntityFromObject(object: { [key: string]: any }) {
//         const { payload, image } = object;
//         if (!payload) throw CustomError.badRequest("Missing payload");
//         return new OcrEntity(image, payload);
//     }
// }
export class OcrMapper {
    static ocrEntityFromObject(object: { [key: string]: any }) {
        const { description } = object[0];
        console.log("THIS OBJECT MAPPER", object[0]);
        if (!description) throw CustomError.badRequest("Missing description");

        return new OcrEntity(object, [{ payload: description }]);
    }
}
