import React, { useState } from 'react';

const RecruiterDashboard = () => {
    const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
    
    const candidates = [
        { id: '1', name: 'Alex Rodriguez', role: 'Sr. Backend Engineer', match: 98, skills: ['Node.js', 'PostgreSQL', 'AWS'], summary: 'Expert in distributed systems and microservices architecture.' },
        { id: '2', name: 'Sarah Chen', role: 'Product Designer', match: 94, skills: ['Figma', 'UX Research', 'Prototyping'], summary: 'Focus on accessible, user-centric human interfaces.' },
        { id: '3', name: 'James Wilson', role: 'Full Stack Developer', match: 89, skills: ['React', 'TypeScript', 'Express'], summary: 'Pragmatic developer with experience in scaling SaaS products.' },
        { id: '4', name: 'Priya Sharma', role: 'Frontend Lead', match: 92, skills: ['Next.js', 'Tailwind', 'Three.js'], summary: 'Specializes in high-performance web experiences and 3D graphics.' }
    ];
    
    const toggleSelect = (id: string) => {
        setSelectedCandidates(prev => 
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };
    
    return (
        <div style={{ padding: '160px 8% 100px 8%', minHeight: '100vh', background: 'var(--bg-main)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
                <div>
                    <h1 style={{ fontSize: '42px', marginBottom: '12px' }}>Recruiter <span className="gradient-text">Dashboard</span></h1>
                    <p style={{ color: 'var(--text-dim)', fontSize: '18px' }}>Welcome back, Sarah. You have 4 top matches for your open roles today.</p>
                </div>
                <div style={{ background: 'var(--bg-card)', padding: '12px 24px', borderRadius: '40px', border: '1px solid var(--glass-border)', display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e' }}></div>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>Active Search: SWE Intern</span>
                </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
                {candidates.map(candidate => (
                    <div key={candidate.id} className="glass-panel" style={{ 
                        padding: '32px', 
                        transition: 'var(--transition)',
                        cursor: 'pointer',
                        border: selectedCandidates.includes(candidate.id) ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                        boxShadow: selectedCandidates.includes(candidate.id) ? '0 0 30px rgba(99, 102, 241, 0.2)' : 'none'
                    }} onClick={() => toggleSelect(candidate.id)}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'flex-start' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 700 }}>
                                {candidate.name.charAt(0)}
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <p style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 700 }}>MATCH SCORE</p>
                                <p style={{ fontSize: '24px', fontWeight: 800 }}>{candidate.match}%</p>
                            </div>
                        </div>
                        
                        <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>{candidate.name}</h3>
                        <p style={{ color: 'var(--text-dim)', fontSize: '14px', marginBottom: '20px' }}>{candidate.role}</p>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                            {candidate.skills.map(skill => (
                                <span key={skill} style={{ fontSize: '11px', background: 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: '30px', color: 'var(--accent)', fontWeight: 600 }}>{skill}</span>
                            ))}
                        </div>
                        
                        <p style={{ fontSize: '14px', color: 'var(--text-dim)', lineHeight: '1.5', marginBottom: '24px' }}>{candidate.summary}</p>
                        
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button className="btn-primary" style={{ flex: 1, padding: '10px 0', fontSize: '13px' }}>View Details</button>
                            <button className="btn-secondary" style={{ flex: 1, padding: '10px 0', fontSize: '13px' }}>Shortlist</button>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Compare Bar */}
            {selectedCandidates.length > 0 && (
                <div className="glass-panel animate-fade" style={{ 
                    position: 'fixed', 
                    bottom: '40px', 
                    left: '50%', 
                    transform: 'translate(-50%, 0)', 
                    width: '90%', 
                    maxWidth: '1000px',
                    padding: '24px 40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid var(--primary-glow)',
                    zIndex: 1000
                }}>
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <p style={{ fontWeight: 600 }}>{selectedCandidates.length} Candidates Selected</p>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            {selectedCandidates.map(id => (
                                <div key={id} style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>
                                    {candidates.find(c => c.id === id)?.name.charAt(0)}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <button className="btn-secondary" onClick={() => setSelectedCandidates([])}>Clear Selection</button>
                        <button className="btn-primary" style={{ width: '200px' }}>AI Comparison View</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecruiterDashboard;
