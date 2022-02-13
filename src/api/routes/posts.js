import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import Post from '../models/Post';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: 'server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post)
            return res.status(404).json({ msg: 'Post not found' });

        res.json(post);
    } catch (error) {
        if (error.kind == 'ObjectId')
            return res.status(404).json({ msg: 'Post not found' });
        console.error(error.message);
        res.status(500).json({ msg: 'server error' });
    }
});

router.post(
    '/',
    body('text', 'Text is required').notEmpty(),
    body('schedule', 'Schedule is required').notEmpty(),
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        const post = new Post(req.body);
        await post.save();
        res.json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: 'server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPost);
    } catch (error) {
        if (error.kind == 'ObjectId')
            return res.status(404).json({ msg: 'Post not found' });
        console.error(error.message);
        res.status(500).json({ msg: 'server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post)
            return res.status(404).json({ msg: 'Post not found' });

        await post.delete();
        res.json({});
    } catch (error) {
        if (error.kind == 'ObjectId')
            return res.status(404).json({ msg: 'Post not found' });
        console.error(error.message);
        res.status(500).json({ msg: 'server error' });
    }
});

export default router;
