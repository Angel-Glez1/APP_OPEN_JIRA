import type { NextApiRequest, NextApiResponse } from 'next'
import { isValidObjectId } from 'mongoose'
import { db } from '../../../database';

import { Entry, IEntry } from '../../../model';

type Data =
    | { msg: string }
    | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query

    if (!id || !isValidObjectId(id)) {
        return res.status(400).json({ msg: 'Ingresa un id de una entrada valida' });
    }


    switch (req.method) {
        case 'GET':
            return getEntry(id, req, res);

        case 'PUT':
            return putEntry(id, req, res);

        default:
            return res.status(400).json({ msg: 'Invalid Method' })
    }

}

const getEntry = async (entry_id: string | string[], req: NextApiRequest, res: NextApiResponse<Data>) => {

    try {

        await db.connect();
        const entry = await Entry.findById(entry_id);

        await db.disconnect();


        const response = entry?._id ? entry : { msg: 'No se encontro el recurso solicitado' };

        return res.status(200).json(response);

    } catch (error) { 
        await db.disconnect();
        console.log(error);

        return res.status(500).json({ msg: 'Error Interno' })
    }

}

const putEntry = async (entry_id: string | string[], req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { _id, createdAt, ...rest } = req.body;


    try {

        await db.connect();
        const entry = await Entry.findOneAndUpdate({ _id: entry_id }, rest, { new: true, runValidators: true });
        await db.disconnect();

        const response = entry?._id ? entry : { msg: 'No se encontro el recurso' };
        const code = entry?._id ? 200 : 400;

        return res.status(code).json(response);

    } catch (error) {
        await db.disconnect();
        console.log(error);

        return res.status(500).json({ msg: 'Error Interno' })
    }

}