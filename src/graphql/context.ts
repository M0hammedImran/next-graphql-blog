import { Context } from '@/interfaces/User';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['query'] });

export function createContext(): Context {
    return { prisma };
}
