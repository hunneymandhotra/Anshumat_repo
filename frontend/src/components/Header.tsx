import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: '24px 8%',
            background: 'rgba(10, 11, 16, 0.7)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
            <div className="logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
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
                    }}>R</span>
                    RecruitAI
                </h2>
            </div>
            
            <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '15px', color: '#94a3b8', fontWeight: 500, transition: 'var(--transition)' }}>Why Us?</Link>
                <Link to="/" style={{ fontSize: '15px', color: '#94a3b8', fontWeight: 500, transition: 'var(--transition)' }}>Solutions</Link>
                <Link to="/login" className="btn-secondary" style={{ padding: '10px 20px', fontSize: '14px', height: 'fit-content' }}>Login</Link>
                <Link to="/onboarding" className="btn-primary" style={{ padding: '10px 24px', fontSize: '14px', borderRadius: '30px' }}>Get Started</Link>
            </nav>
        </header>
    );
};

export default Header;
