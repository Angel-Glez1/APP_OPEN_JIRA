import { Entry } from '../interfaces';

interface SeedDate {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string;
    createdAt: number;
    status: string;
}

export const seedData: SeedDate = {
    entries: [
        { description: 'Pending - Lorem ipsum dolor sit amet consectetur adipisicing elit', createdAt: Date.now(), status: 'pending' },
        { description: 'Pending - Lorem ipsum dolor sit amet consectetur adipisicing elit', createdAt: Date.now(), status: 'pending' },
        { description: 'In-progress- Lorem ipsum dolor sit amet consectetur adipisicing', createdAt: Date.now() - 1_0000_000, status: 'in-progress' },
        { description: 'Finished - Lorem ipsum dolor sit amet consectetur adipisicing elit', createdAt: Date.now() - 100_000, status: 'finished' },
    ],
}