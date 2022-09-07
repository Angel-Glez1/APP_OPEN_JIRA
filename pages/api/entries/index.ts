import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Entry, IEntry } from '../../../model';

type Data =
    | { msg: string }
    | IEntry[]
    | IEntry

interface IPostData {
    description: string;
    status?: 'pending' | 'in-progress' | 'finished';
}


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getEntries(req,res);

        case 'POST':
            return postEntry(req, res);

        default:
            return res.status(400).json({ msg: 'Invalid Method' })
    }

}


const getEntries = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    console.log(req.query);
    
    await db.connect();
    const entries = await Entry.find().sort({ createdAt: 'ascending' });
    await db.disconnect();

    res.status(200).json(entries)
}



const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { description = '', status = 'pending' } = req.body as IPostData;

    const entry = new Entry({ description, status });

    try {

        await db.connect();
        await entry.save();
        await db.disconnect();

        res.status(201).json(entry);

    } catch (error) {
        await db.disconnect();
        console.log(error);

        res.status(500).json({ msg: 'Error Interno' })

    }

}


