const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.deleteMany();
    console.log(user);
}

main()
    .catch((e) => {
        console.error(e.message);
    })
    .finally(() => {
        prisma.$disconnect();
    });

