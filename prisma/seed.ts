import { prisma } from "@/lib/db"

async function main () {
    const user = prisma.user.upsert({
        where: { 
            email: 'christophdepta@gmail.com'
            },
        update: {},
        create: {
            id: 'test123',
            email: 'christophdepta@gmail.com',
            name: 'Krzysztof Depta',
        },
        include: {
            subscriptions: true,
        },
    })
}