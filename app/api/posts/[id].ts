import { PrismaClient } from "@prisma/client"

type Post = {
    id: number,
    title: string,
    content: string,
    published: boolean
}
const prisma = new PrismaClient();

export async function GET(request: Request, res: Response) {
    try {
        console.log('request: ', request);
        const _data: any = await prisma.post.findMany();
        return new Response(JSON.stringify(_data))
    } catch (error) {
        return new Response(JSON.stringify(error))
    }
}