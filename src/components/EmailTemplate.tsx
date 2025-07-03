import { ReactNode } from "react";

interface EmailTemplateProps {
  children: ReactNode;
}

export const EmailTemplate = ({ children }: EmailTemplateProps) => {
  return (
    <div style={{
      backgroundColor: 'hsl(215, 25%, 8%)',
      color: 'hsl(0, 0%, 100%)',
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: '40px 20px',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: 'hsl(215, 20%, 12%)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid hsl(215, 15%, 20%)'
      }}>
        {/* Header */}
        <div style={{
          padding: '30px',
          borderBottom: '1px solid hsl(215, 15%, 20%)',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <img 
            src="https://cryptologos.cc/logos/v-systems-vsys-logo.svg?v=040" 
            alt="Vertex Trading Logo" 
            style={{ height: '40px', width: 'auto' }}
          />
          <h1 style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'hsl(0, 0%, 100%)'
          }}>
            Vertex Trading
          </h1>
        </div>

        {/* Content */}
        <div style={{ padding: '30px' }}>
          {children}
        </div>

        {/* Footer */}
        <div style={{
          padding: '30px',
          borderTop: '1px solid hsl(215, 15%, 20%)',
          backgroundColor: 'hsl(215, 15%, 15%)',
          textAlign: 'center' as const
        }}>
          <p style={{
            margin: '0 0 15px 0',
            fontSize: '14px',
            color: 'hsl(0, 0%, 70%)',
            lineHeight: '1.5'
          }}>
            This email was sent by Vertex Trading. For support, please contact us at{' '}
            <a 
              href="mailto:support@vertextrading.com" 
              style={{ color: 'hsl(60, 100%, 50%)', textDecoration: 'none' }}
            >
              support@vertextrading.com
            </a>
          </p>
          <p style={{
            margin: 0,
            fontSize: '12px',
            color: 'hsl(0, 0%, 50%)'
          }}>
            © 2025 Vertex Trading. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};