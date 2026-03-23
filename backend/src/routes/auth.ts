import { Router, Request, Response } from 'express';

const router = Router();

router.post('/login', (req: Request, res: Response) => {
    const { email, password } = req.body;
    
    // Required Demo User from the Assignment
    if (email === 'hire-me@anshumat.org' && password === 'HireMe@2025!') {
        return res.json({ 
            user: { name: 'Sarah Johnson', role: 'Recruiter' },
            token: 'mock-jwt-token-for-demo'
        });
    }
    
    return res.status(401).json({ message: 'Invalid credentials. Use the demo account.' });
});

export default router;
