import { EmailTemplate } from "./EmailTemplate";

interface WelcomeEmailProps {
  customerName: string;
  accountId: string;
  verificationLink?: string;
}

export const WelcomeEmail = ({
  customerName,
  accountId,
  verificationLink
}: WelcomeEmailProps) => {
  return (
    <EmailTemplate>
      <h2 style={{
        margin: '0 0 20px 0',
        fontSize: '28px',
        fontWeight: 'bold',
        color: 'hsl(0, 0%, 100%)'
      }}>
        Welcome to Vertex Trading
      </h2>

      <p style={{
        margin: '0 0 30px 0',
        fontSize: '16px',
        color: 'hsl(0, 0%, 70%)',
        lineHeight: '1.6'
      }}>
        Dear {customerName},
      </p>

      <p style={{
        margin: '0 0 30px 0',
        fontSize: '16px',
        color: 'hsl(0, 0%, 70%)',
        lineHeight: '1.6'
      }}>
        Welcome to the future of cryptocurrency trading! Your account has been successfully created and you're ready to start your trading journey with confidence.
      </p>

      {/* Welcome Highlight */}
      <div style={{
        textAlign: 'center' as const,
        padding: '30px',
        backgroundColor: 'hsl(215, 15%, 18%)',
        border: '2px solid hsl(60, 100%, 50%)',
        borderRadius: '12px',
        marginBottom: '30px'
      }}>
        <h3 style={{
          margin: '0 0 15px 0',
          fontSize: '24px',
          color: 'hsl(60, 100%, 50%)',
          fontWeight: 'bold'
        }}>
          🎉 Account Created Successfully!
        </h3>
        <p style={{
          margin: 0,
          fontSize: '16px',
          color: 'hsl(0, 0%, 70%)'
        }}>
          Your trading account is ready to go
        </p>
      </div>

      {/* Account Details */}
      <div style={{
        backgroundColor: 'hsl(215, 15%, 18%)',
        border: '1px solid hsl(215, 15%, 20%)',
        borderRadius: '8px',
        padding: '25px',
        marginBottom: '30px'
      }}>
        <h3 style={{
          margin: '0 0 20px 0',
          fontSize: '18px',
          color: 'hsl(60, 100%, 50%)',
          fontWeight: 'bold'
        }}>
          Account Information
        </h3>

        <table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Account ID:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              fontFamily: 'monospace',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              {accountId}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Account Holder:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              {customerName}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)'
            }}>
              Status:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(120, 60%, 50%)',
              textAlign: 'right' as const,
              fontWeight: 'bold'
            }}>
              Active
            </td>
          </tr>
        </table>
      </div>

      {/* Features Highlight */}
      <div style={{
        backgroundColor: 'hsl(215, 15%, 15%)',
        border: '1px solid hsl(215, 15%, 20%)',
        borderRadius: '8px',
        padding: '25px',
        marginBottom: '30px'
      }}>
        <h3 style={{
          margin: '0 0 20px 0',
          fontSize: '18px',
          color: 'hsl(60, 100%, 50%)',
          fontWeight: 'bold'
        }}>
          What You Can Do Now
        </h3>

        <div style={{ marginBottom: '15px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px'
          }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              backgroundColor: 'hsl(60, 100%, 50%)',
              borderRadius: '50%',
              marginRight: '12px'
            }}></span>
            <span style={{
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              fontWeight: 'bold'
            }}>
              Real-time Market Data
            </span>
          </div>
          <p style={{
            margin: '0 0 15px 20px',
            fontSize: '13px',
            color: 'hsl(0, 0%, 70%)',
            lineHeight: '1.4'
          }}>
            Access live cryptocurrency prices and advanced charting tools
          </p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px'
          }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              backgroundColor: 'hsl(60, 100%, 50%)',
              borderRadius: '50%',
              marginRight: '12px'
            }}></span>
            <span style={{
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              fontWeight: 'bold'
            }}>
              Competitive Trading Fees
            </span>
          </div>
          <p style={{
            margin: '0 0 15px 20px',
            fontSize: '13px',
            color: 'hsl(0, 0%, 70%)',
            lineHeight: '1.4'
          }}>
            Enjoy low trading fees and transparent pricing
          </p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px'
          }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              backgroundColor: 'hsl(60, 100%, 50%)',
              borderRadius: '50%',
              marginRight: '12px'
            }}></span>
            <span style={{
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              fontWeight: 'bold'
            }}>
              Advanced Security
            </span>
          </div>
          <p style={{
            margin: '0 0 15px 20px',
            fontSize: '13px',
            color: 'hsl(0, 0%, 70%)',
            lineHeight: '1.4'
          }}>
            Your funds are protected with enterprise-grade security measures
          </p>
        </div>

        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px'
          }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              backgroundColor: 'hsl(60, 100%, 50%)',
              borderRadius: '50%',
              marginRight: '12px'
            }}></span>
            <span style={{
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              fontWeight: 'bold'
            }}>
              24/7 Support
            </span>
          </div>
          <p style={{
            margin: '0 0 0 20px',
            fontSize: '13px',
            color: 'hsl(0, 0%, 70%)',
            lineHeight: '1.4'
          }}>
            Our expert support team is available around the clock
          </p>
        </div>
      </div>

      {verificationLink && (
        <div style={{
          padding: '20px',
          backgroundColor: 'hsl(45, 100%, 5%)',
          border: '1px solid hsl(45, 100%, 25%)',
          borderRadius: '8px',
          marginBottom: '30px'
        }}>
          <p style={{
            margin: '0 0 15px 0',
            fontSize: '14px',
            color: 'hsl(45, 100%, 50%)',
            fontWeight: 'bold'
          }}>
            ⚠️ Email Verification Required
          </p>
          <p style={{
            margin: '0 0 15px 0',
            fontSize: '14px',
            color: 'hsl(0, 0%, 70%)',
            lineHeight: '1.5'
          }}>
            Please verify your email address to start trading and unlock all features.
          </p>
          <a 
            href={verificationLink}
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: 'hsl(45, 100%, 50%)',
              color: 'hsl(215, 25%, 8%)',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            Verify Email Address
          </a>
        </div>
      )}

      <p style={{
        margin: '30px 0 0 0',
        fontSize: '16px',
        color: 'hsl(0, 0%, 70%)',
        lineHeight: '1.6'
      }}>
        Ready to start your trading journey? Deposit funds into your account and begin trading with confidence on our advanced platform.
      </p>

      {/* CTA Buttons */}
      <div style={{ 
        textAlign: 'center' as const, 
        marginTop: '30px',
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        flexWrap: 'wrap' as const
      }}>
        <a 
          href="#" 
          style={{
            display: 'inline-block',
            padding: '15px 25px',
            backgroundColor: 'hsl(60, 100%, 50%)',
            color: 'hsl(215, 25%, 8%)',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Make Your First Deposit
        </a>
        <a 
          href="#" 
          style={{
            display: 'inline-block',
            padding: '15px 25px',
            backgroundColor: 'transparent',
            color: 'hsl(60, 100%, 50%)',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '16px',
            border: '2px solid hsl(60, 100%, 50%)'
          }}
        >
          Explore Markets
        </a>
      </div>
    </EmailTemplate>
  );
};