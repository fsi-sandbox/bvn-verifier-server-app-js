import { Router } from 'express';

const router = Router();
const defaultResponse = `BVN Verifier: ${new Date()}`;
const defaultHandler = (req, res) => res.status(200).send({ message: defaultResponse });

// handle requests if no path was specified
// more like a fall-back / catch-all endpoint
router.get('/', defaultHandler);
router.post('/', defaultHandler);

// handle requests to a /ping path
router.get('/ping', defaultHandler);
router.post('/ping', defaultHandler);

export default router;
