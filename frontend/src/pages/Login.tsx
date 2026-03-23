import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (credentials.email === 'hire-me@anshumat.org' && credentials.password === 'HireMe@2025!') {
            navigate('/recruiter');
        } else {
            setError('Invalid credentials. Use the demo account.');
        }
    };
    
    return (
        <div style={{ 
            height: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '24px'
        }}>
            <div className="glass-panel" style={{ 
                width: '100%', 
                maxWidth: '450px', 
                padding: '48px',
                textAlign: 'center'
            }}>
                <div style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Welcome Back</h2>
                    <p style={{ color: 'var(--text-dim)' }}>Login to access your Recruiter Dashboard</p>
                </div>
                
                {error && <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '12px', borderRadius: '8px', marginBottom: '24px', fontSize: '14px' }}>{error}</div>}
                
                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ textAlign: 'left' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-dim)' }}>Email Address</label>
                        <input 
                            type="email" 
                            style={{ 
                                width: '100%', 
                                background: 'rgba(0,0,0,0.2)', 
                                border: '1px solid var(--border)', 
                                borderRadius: '12px',
                                padding: '14px',
                                color: 'white',
                                outline: 'none'
                            }}
                            value={credentials.email}
                            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                            required
                        />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-dim)' }}>Password</label>
                        <input 
                            type="password" 
                            style={{ 
                                width: '100%', 
                                background: 'rgba(0,0,0,0.2)', 
                                border: '1px solid var(--border)', 
                                borderRadius: '12px',
                                padding: '14px',
                                color: 'white',
                                outline: 'none'
                            }}
                            value={credentials.password}
                            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px' }}>Sign In</button>
                </form>
                
                <div style={{ marginTop: '32px', padding: '16px', background: 'rgba(99, 102, 241, 0.05)', borderRadius: '12px', border: '1px dashed var(--primary-glow)' }}>
                    <p style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 600, marginBottom: '8px' }}>REVIEWER CREDENTIALS</p>
                    <p style={{ fontSize: '14px' }}>Email: hire-me@anshumat.org</p>
                    <p style={{ fontSize: '14px' }}>Pass: HireMe@2025!</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
