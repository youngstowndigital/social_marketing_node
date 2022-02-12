import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('All posts');
});

router.get('/:id', (req, res) => {
    res.send('Get post');
});

router.post('/', (req, res) => {
    res.send('Create post');
});

router.put('/:id', (req, res) => {
    res.send('Update post');
});

router.delete('/:id', (req, res) => {
    res.send('Delete post');
});

export default router;
