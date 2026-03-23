import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="landing-container" style={{ paddingTop: '120px' }}>
            {/* Hero Section */}
            <section style={{ 
                padding: '0 8%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                gap: '30px',
                marginBottom: '100px'
            }}>
                <div className="animate-fade" style={{ maxWidth: '900px' }}>
                    <h1 style={{ 
                        fontSize: 'clamp(40px, 8vw, 72px)', 
                        lineHeight: 1.1, 
                        marginBottom: '20px' 
                    }}>
                        Stop uploading PDFs. <br />
                        <span className="gradient-text">Start showing your potential.</span>
                    </h1>
                    <p style={{ 
                        color: 'var(--text-dim)', 
                        fontSize: '20px', 
                        maxWidth: '700px', 
                        margin: '0 auto 40px auto' 
                    }}>
                        Traditional resumes are broken. AI-Powered recruitment helps you build a 
                        dynamic profile that actually reflects your skills, projects, and impact.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <button onClick={() => navigate('/onboarding')} className="btn-primary" style={{ padding: '16px 36px', fontSize: '18px', borderRadius: '40px' }}>
                            Build Your Smart Profile
                        </button>
                        <button className="btn-secondary" style={{ padding: '16px 36px', fontSize: '18px', borderRadius: '40px' }}>
                            For Recruiters
                        </button>
                    </div>
                </div>
                
                {/* Visual Representation */}
                <div className="glass-panel" style={{ 
                    width: '100%', 
                    aspectRatio: '16/9', 
                    marginTop: '60px',
                    position: 'relative',
                    overflow: 'hidden',
                    maxHeight: '600px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" alt="RecruitAI Interface" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.8
                    }} />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, var(--bg-main), transparent 40%)'
                    }}></div>
                </div>
            </section>
            
            {/* Comparison Section */}
            <section style={{ padding: '100px 8%', background: 'rgba(255, 255, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '42px', marginBottom: '16px' }}>What's wrong with <span style={{ color: '#ef4444' }}>Resumes?</span></h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '18px' }}>The old way is biased, inefficient, and limits your potential.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    <div className="glass-panel" style={{ padding: '40px' }}>
                        <h3 style={{ color: '#ef4444', marginBottom: '20px' }}>Traditional Hiring</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li style={{ color: 'var(--text-dim)', display: 'flex', gap: '12px' }}>❌ PDF Parsing Errors</li>
                            <li style={{ color: 'var(--text-dim)', display: 'flex', gap: '12px' }}>❌ Formatting bias (Style over Substance)</li>
                            <li style={{ color: 'var(--text-dim)', display: 'flex', gap: '12px' }}>❌ Manual evaluation takes hours</li>
                            <li style={{ color: 'var(--text-dim)', display: 'flex', gap: '12px' }}>❌ Static data that goes out of date</li>
                        </ul>
                    </div>
                    
                    <div className="glass-panel" style={{ padding: '40px', border: '1px solid var(--primary-glow)' }}>
                        <h3 style={{ color: 'var(--accent)', marginBottom: '20px' }}>RecruitAI Experience</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li style={{ color: '#fff', display: 'flex', gap: '12px' }}>✅ Smart Data Capture (Conversational)</li>
                            <li style={{ color: '#fff', display: 'flex', gap: '12px' }}>✅ Verified Skills & Project Mapping</li>
                            <li style={{ color: '#fff', display: 'flex', gap: '12px' }}>✅ Instantly searchable & structured</li>
                            <li style={{ color: '#fff', display: 'flex', gap: '12px' }}>✅ Real-time impact analysis</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
