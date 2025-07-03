import { EmailTemplate } from "./EmailTemplate";

interface WithdrawalConfirmationEmailProps {
  customerName: string;
  transactionId: string;
  amount: string;
  currency: string;
  destination: string;
  fee: string;
  timestamp: string;
  remainingBalance: string;
  status: 'PROCESSING' | 'COMPLETED' | 'PENDING';
}

export const WithdrawalConfirmationEmail = ({
  customerName,
  transactionId,
  amount,
  currency,
  destination,
  fee,
  timestamp,
  remainingBalance,
  status
}: WithdrawalConfirmationEmailProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'COMPLETED':
        return 'hsl(120, 60%, 50%)';
      case 'PROCESSING':
        return 'hsl(45, 100%, 50%)';
      case 'PENDING':
        return 'hsl(30, 100%, 50%)';
      default:
        return 'hsl(0, 0%, 70%)';
    }
  };

  return (
    <EmailTemplate>
      <h2 style={{
        margin: '0 0 20px 0',
        fontSize: '28px',
        fontWeight: 'bold',
        color: 'hsl(0, 0%, 100%)'
      }}>
        Withdrawal Confirmation
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
        Your withdrawal request has been received and is being processed.
      </p>

      {/* Status Badge */}
      <div style={{
        display: 'inline-block',
        padding: '8px 16px',
        backgroundColor: getStatusColor(),
        color: status === 'PROCESSING' ? 'hsl(215, 25%, 8%)' : 'hsl(0, 0%, 100%)',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '30px'
      }}>
        {status}
      </div>

      {/* Amount Highlight */}
      <div style={{
        textAlign: 'center' as const,
        padding: '25px',
        backgroundColor: 'hsl(215, 15%, 18%)',
        border: '2px solid hsl(0, 72%, 51%)',
        borderRadius: '12px',
        marginBottom: '30px'
      }}>
        <p style={{
          margin: '0 0 10px 0',
          fontSize: '16px',
          color: 'hsl(0, 0%, 70%)'
        }}>
          Withdrawal Amount
        </p>
        <p style={{
          margin: 0,
          fontSize: '36px',
          fontWeight: 'bold',
          color: 'hsl(0, 72%, 51%)',
          fontFamily: 'monospace'
        }}>
          -{amount} {currency}
        </p>
      </div>

      {/* Transaction Details */}
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
          Withdrawal Details
        </h3>

        <table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Transaction ID:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              fontFamily: 'monospace',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              {transactionId}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Destination:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              fontFamily: 'monospace',
              borderBottom: '1px solid hsl(215, 15%, 25%)',
              wordBreak: 'break-all' as const
            }}>
              {destination}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Withdrawal Fee:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              fontFamily: 'monospace',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              {fee} {currency}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Requested At:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              {timestamp}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '15px 0 5px 0',
              fontSize: '16px',
              color: 'hsl(60, 100%, 50%)',
              fontWeight: 'bold'
            }}>
              Remaining Balance:
            </td>
            <td style={{
              padding: '15px 0 5px 0',
              fontSize: '16px',
              color: 'hsl(60, 100%, 50%)',
              textAlign: 'right' as const,
              fontFamily: 'monospace',
              fontWeight: 'bold'
            }}>
              {remainingBalance} {currency}
            </td>
          </tr>
        </table>
      </div>

      {/* Processing Time Info */}
      <div style={{
        padding: '20px',
        backgroundColor: 'hsl(215, 15%, 15%)',
        border: '1px solid hsl(215, 15%, 20%)',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <p style={{
          margin: '0 0 10px 0',
          fontSize: '14px',
          color: 'hsl(60, 100%, 50%)',
          fontWeight: 'bold'
        }}>
          📝 Processing Information
        </p>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: 'hsl(0, 0%, 70%)',
          lineHeight: '1.5'
        }}>
          {status === 'COMPLETED' 
            ? 'Your withdrawal has been completed and sent to the destination address.'
            : 'Withdrawals are typically processed within 24 hours. You will receive another email once your withdrawal is completed.'
          }
        </p>
      </div>

      <p style={{
        margin: '30px 0 0 0',
        fontSize: '16px',
        color: 'hsl(0, 0%, 70%)',
        lineHeight: '1.6'
      }}>
        Thank you for using Vertex Trading. If you have any questions about this withdrawal, please don't hesitate to contact our support team.
      </p>

      {/* CTA Button */}
      <div style={{ textAlign: 'center' as const, marginTop: '30px' }}>
        <a 
          href="#" 
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            backgroundColor: 'hsl(60, 100%, 50%)',
            color: 'hsl(215, 25%, 8%)',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          View Transaction History
        </a>
      </div>
    </EmailTemplate>
  );
};