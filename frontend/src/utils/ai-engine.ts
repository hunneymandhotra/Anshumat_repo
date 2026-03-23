import type { Experience } from '../types/candidate';

export const aiStructureExperience = async (rawText: string): Promise<Experience[]> => {
    // Artificial AI Delay for UX "Thinking" feel
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Logic to simulate AI's understanding
    const lowercaseText = rawText.toLowerCase();
    
    // Simple conditional mocks to feel "Smart"
    if (lowercaseText.includes('google')) {
        return [{
            id: Math.random().toString(),
            role: 'Software Engineer Intern',
            company: 'Google',
            duration: 'Summer 2023',
            description: 'Analyzed search algorithms and improved frontend rendering speed by 25% using advanced React optimization techniques.'
        }];
    }
    
    if (lowercaseText.includes('startup') || lowercaseText.includes('built')) {
        return [{
            id: Math.random().toString(),
            role: 'Lead Developer (Startup)',
            company: 'Stealth Startup',
            duration: 'Jan 2024 - Present',
            description: 'Built a full-stack SaaS platform from scratch using Next.js and PostgreSQL. Designed complex data schemas and implemented real-time notifications.'
        }];
    }
    
    // Default mock for any other input
    return [{
        id: Math.random().toString(),
        role: 'Full Stack Developer',
        company: 'Dynamic Systems LLC',
        duration: 'June 2023 - Dec 2023',
        description: 'Collaborated with cross-functional teams to deliver high-quality web applications using modern React patterns.'
    }];
};
