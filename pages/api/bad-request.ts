import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    msg: string | string[]
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    const {
        msg = 'Bad Request',

    } = req.query;

    res.status(400).json({ msg })
}