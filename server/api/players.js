const router = require('express').Router();
module.exports = router;

const prisma = require('../prisma');

/** Returns an array of all players. */
router.get('/', async (req, res, next) => {
  try {
    const players = await prisma.player.findMany();
    res.json(players);
  } catch {
    next();
  }
});

/** Returns a single player with the specified id. */
router.get('/:id', async (req, res, next) => {
    try {
      const id = +req.params.id;
  
      const player = await prisma.player.findUnique({ where: { id } });
      if (!player) {
        return next({
          status: 404,
          message: `Could not find book with id ${id}.`,
        });
      }
  
      res.json(player);
    } catch {
      next();
    }
  });