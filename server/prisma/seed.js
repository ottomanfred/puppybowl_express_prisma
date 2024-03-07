const prisma = require("../prisma");

const seed = async (numPlayers = 10) => {
  for (let i = 0; i < numPlayers; i++) {
    await prisma.player.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `Player ${i}`,
        breed: `Breed ${i}`,
        status: `Status ${i}`,
      },
    });
  }
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
