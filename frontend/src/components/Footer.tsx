import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '100px 8% 60px 8%',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            background: 'var(--bg-main)',
            marginTop: '100px'
        }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 800, display: 'flex', gap: '10px' }}>
                         <span style={{
                            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '18px'
                        }}>R</span> RecruitAI
                    </h2>
                    <p style={{ color: 'var(--text-dim)', maxWidth: '300px' }}>
                        The future of talent acquisition. Built for impact, not just resumes.
                    </p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <h4 style={{ fontWeight: 600 }}>Product</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-dim)' }}>
                        <li>AI Profile Builder</li>
                        <li>Smart Matching</li>
                        <li>Candidate Insights</li>
                        <li>API Access</li>
                    </ul>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <h4 style={{ fontWeight: 600 }}>Resources</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-dim)' }}>
                        <li>Hiring Playbook</li>
                        <li>API Docs</li>
                        <li>Case Studies</li>
                        <li>Support</li>
                    </ul>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <h4 style={{ fontWeight: 600 }}>Company</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-dim)' }}>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
            
            <div style={{ marginTop: '100px', padding: '40px 0 0 0', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: '12px', color: 'var(--text-dim)' }}>© 2026 RecruitAI Platform. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>Twitter</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>LinkedIn</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>GitHub</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
