import { isValidObjectId } from "mongoose"
import { db } from "../database";
import { Entry, IEntry } from "../model";


const findEntry = (id: string): Promise<IEntry | null> => new Promise(async (res, rej) => {

    if (!isValidObjectId(id)) return rej(null);

    await db.connect();
    const entry = await Entry.findById(id).lean();
    await db.disconnect();

    return res(JSON.parse(JSON.stringify(entry)))
})

export {
    findEntry
}