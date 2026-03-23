import { Router, Request, Response } from 'express';

const router = Router();

// Simulated AI Structuring Endpoint
router.post('/structure-experience', (req: Request, res: Response) => {
    const { rawText } = req.body;
    
    console.log(`[RecruitAI - AI Engine] Processing: ${rawText}`);
    
    // Simulate complex AI processing delay for UX demonstration
    setTimeout(() => {
        // Simple logic to extract some terms or just mock it convincingly
        const structuredData = {
            role: 'Software Development Intern',
            company: rawText.includes('Google') ? 'Google' : 'Innovate Labs',
            duration: 'Summer 23',
            description: 'Assisted in building accessible UI components and improving frontend performance indicators by optimizing asset loading.',
            keyAchievements: [
                'Optimized React component tree',
                'Reduced bundle size by 15%',
                'Built 5+ high-fidelity prototypes'
            ]
        };
        
        res.json({ structuredData });
    }, 2500);
});

router.get('/matches', (req: Request, res: Response) => {
    const candidates = [
        { id: '1', name: 'Alex Rodriguez', role: 'Sr. Backend Engineer', match: 98 },
        { id: '2', name: 'Sarah Chen', role: 'Product Designer', match: 94 },
        { id: '3', name: 'James Wilson', role: 'Full Stack Developer', match: 89 },
        { id: '4', name: 'Priya Sharma', role: 'Frontend Lead', match: 92 }
    ];
    res.json({ candidates });
});

export default router;
