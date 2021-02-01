import { Router } from 'express';

const router = Router();
const defaultResponse = `BVN Verifier: ${new Date()}`;

router.get('/', (req, res) => res.status(200).send({ message: defaultResponse }));
router.post('/', (req, res) => res.status(200).send({ message: defaultResponse }));

export default router;
