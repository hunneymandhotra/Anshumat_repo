import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OnboardingFlow.module.css';
import type { CandidateProfile, Experience } from '../types/candidate';
import { aiStructureExperience } from '../utils/ai-engine';

const OnboardingFlow = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isStructuring, setIsStructuring] = useState(false);
    const [profile, setProfile] = useState<CandidateProfile>({
        name: '',
        email: '',
        bio: '',
        experiences: [],
        skills: [],
        projects: []
    });
    
    const [rawExperience, setRawExperience] = useState('');
    
    const handleNext = () => {
        if (step === 2 && rawExperience) {
            simulateAIStructuring();
        } else {
            setStep(prev => prev + 1);
        }
    };
    
    const simulateAIStructuring = async () => {
        setIsStructuring(true);
        try {
            const mockExperiences = await aiStructureExperience(rawExperience);
            setProfile(p => ({ ...p, experiences: mockExperiences }));
            setIsStructuring(false);
            setStep(3);
        } catch (error) {
            setIsStructuring(false);
            console.error(error);
        }
    };
    
    return (
        <div className={styles.onboardingLayout}>
            {/* Steps Section */}
            <div className={styles.onboardingSteps}>
                {step === 1 && (
                    <div className={`${styles.stepCard} animate-fade`}>
                        <h2 style={{ marginBottom: '24px' }}>Welcome! Let's build your <span className="gradient-text">Identity</span>.</h2>
                        <div className={styles.inputGroup}>
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Jane Doe" 
                                value={profile.name}
                                onChange={e => setProfile({...profile, name: e.target.value})}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Email Address</label>
                            <input 
                                type="email" 
                                placeholder="jane@example.com"
                                value={profile.email}
                                onChange={e => setProfile({...profile, email: e.target.value})}
                            />
                        </div>
                        <button className="btn-primary" onClick={handleNext} style={{ width: '100%' }}>Next Step</button>
                    </div>
                )}
                
                {step === 2 && (
                    <div className={`${styles.stepCard} animate-fade`}>
                        <h2 style={{ marginBottom: '8px' }}>Experience</h2>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '24px' }}>Don't worry about formatting. Just tell us what you've done in your own words.</p>
                        <div className={styles.inputGroup}>
                            <label>Description of your work</label>
                            <textarea 
                                rows={6} 
                                placeholder="I worked as a web design intern at Google for 6 months where I helped build their search UI..."
                                value={rawExperience}
                                onChange={e => setRawExperience(e.target.value)}
                            />
                        </div>
                        {isStructuring ? (
                             <div className={styles.aiStructuring}>
                                <div className={styles.pulse}></div>
                                <span>AI is structuring your experience...</span>
                             </div>
                        ) : (
                            <button className="btn-primary" onClick={handleNext} style={{ width: '100%' }}>Analyze with AI</button>
                        )}
                    </div>
                )}
                
                {step === 3 && (
                    <div className={`${styles.stepCard} animate-fade`}>
                        <h2 style={{ marginBottom: '8px' }}>Refine Your Experience</h2>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '24px' }}>The AI has structured your input. You can now edit it for accuracy.</p>
                        
                        {profile.experiences.map((exp: Experience) => (
                            <div key={exp.id} className="glass-panel" style={{ padding: '20px', marginBottom: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <h4 style={{ color: 'var(--accent)' }}>{exp.role}</h4>
                                    <span style={{ fontSize: '13px', color: 'var(--text-dim)' }}>{exp.duration}</span>
                                </div>
                                <p style={{ fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>{exp.company}</p>
                                <p style={{ fontSize: '14px', color: 'var(--text-dim)' }}>{exp.description}</p>
                            </div>
                        ))}
                        
                        <button className="btn-secondary" style={{ width: '100%', marginBottom: '12px' }}>+ Add More Manually</button>
                        <button className="btn-primary" onClick={handleNext} style={{ width: '100%' }}>Everything looks good!</button>
                    </div>
                )}

                {step === 4 && (
                    <div className={`${styles.stepCard} animate-fade`}>
                        <h2 style={{ marginBottom: '8px' }}>Skill Set</h2>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '24px' }}>AI suggested these skills based on your profile.</p>
                        
                        <div style={{ marginBottom: '20px' }}>
                            {['React', 'TypeScript', 'Node.js', 'UI Design', 'PostgreSQL', 'Redux'].map(skill => (
                                <div key={skill} className={styles.chip}>
                                    <span>{skill}</span>
                                    <span style={{ fontSize: '10px', color: 'var(--primary)' }}>Suggest</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className={styles.inputGroup}>
                            <label>Add Skill Manually</label>
                            <input type="text" placeholder="e.g. Python" />
                        </div>
                        
                        <button className="btn-primary" onClick={() => navigate('/login')} style={{ width: '100%' }}>Complete Profile</button>
                    </div>
                )}
            </div>
            
            {/* Live Profile Preview - THE WOW FACTOR */}
            <div className={styles.previewSide}>
                <div style={{ position: 'sticky', top: '160px' }}>
                    <div style={{ marginBottom: '24px' }}>
                        <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-dim)', marginBottom: '16px' }}>Live Profile Preview</h4>
                        <div className="glass-panel" style={{ padding: '32px', minHeight: '400px', border: '1px solid var(--primary-glow)' }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: 'white' }}>
                                    {profile.name ? profile.name.charAt(0) : 'P'}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '24px' }}>{profile.name || 'Your Name'}</h3>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '14px' }}>{profile.email || 'your.email@example.com'}</p>
                                </div>
                            </div>
                            
                            <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '24px 0' }} />
                            
                            <div style={{ marginBottom: '24px' }}>
                                <h4 style={{ marginBottom: '16px', fontSize: '16px' }}>Impact & Experience</h4>
                                {profile.experiences.length > 0 ? (
                                    profile.experiences.map((exp: Experience) => (
                                        <div key={exp.id} style={{ marginBottom: '16px' }}>
                                            <p style={{ fontWeight: 600 }}>{exp.role} @ {exp.company}</p>
                                            <p style={{ fontSize: '13px', color: 'var(--text-dim)' }}>{exp.description}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p style={{ color: 'var(--text-dim)', fontStyle: 'italic', fontSize: '14px' }}>Complete steps to see your profile grow.</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ width: '40px', height: '40px', color: 'var(--accent)', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                        <div>
                            <p style={{ fontSize: '14px', fontWeight: 600 }}>Real-time Auto-save</p>
                            <p style={{ fontSize: '12px', color: 'var(--text-dim)' }}>Last saved just now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingFlow;
