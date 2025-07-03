import { EmailTemplate } from "./EmailTemplate";

interface DepositConfirmationEmailProps {
  customerName: string;
  transactionId: string;
  amount: string;
  currency: string;
  method: string;
  timestamp: string;
  newBalance: string;
}

export const DepositConfirmationEmail = ({
  customerName,
  transactionId,
  amount,
  currency,
  method,
  timestamp,
  newBalance
}: DepositConfirmationEmailProps) => {
  return (
    <EmailTemplate>
      <h2 style={{
        margin: '0 0 20px 0',
        fontSize: '28px',
        fontWeight: 'bold',
        color: 'hsl(0, 0%, 100%)'
      }}>
        Deposit Confirmation
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
        Your deposit has been successfully processed and added to your account.
      </p>

      {/* Status Badge */}
      <div style={{
        display: 'inline-block',
        padding: '8px 16px',
        backgroundColor: 'hsl(120, 60%, 50%)',
        color: 'hsl(0, 0%, 100%)',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '30px'
      }}>
        COMPLETED
      </div>

      {/* Amount Highlight */}
      <div style={{
        textAlign: 'center' as const,
        padding: '25px',
        backgroundColor: 'hsl(215, 15%, 18%)',
        border: '2px solid hsl(60, 100%, 50%)',
        borderRadius: '12px',
        marginBottom: '30px'
      }}>
        <p style={{
          margin: '0 0 10px 0',
          fontSize: '16px',
          color: 'hsl(0, 0%, 70%)'
        }}>
          Deposited Amount
        </p>
        <p style={{
          margin: 0,
          fontSize: '36px',
          fontWeight: 'bold',
          color: 'hsl(60, 100%, 50%)',
          fontFamily: 'monospace'
        }}>
          {amount} {currency}
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
          Transaction Details
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
              Payment Method:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              {method}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Processed At:
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
              New Balance:
            </td>
            <td style={{
              padding: '15px 0 5px 0',
              fontSize: '16px',
              color: 'hsl(60, 100%, 50%)',
              textAlign: 'right' as const,
              fontFamily: 'monospace',
              fontWeight: 'bold'
            }}>
              {newBalance} {currency}
            </td>
          </tr>
        </table>
      </div>

      <p style={{
        margin: '30px 0 0 0',
        fontSize: '16px',
        color: 'hsl(0, 0%, 70%)',
        lineHeight: '1.6'
      }}>
        Your funds are now available for trading. Start exploring our advanced trading features and competitive rates.
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
          Start Trading
        </a>
      </div>
    </EmailTemplate>
  );
};