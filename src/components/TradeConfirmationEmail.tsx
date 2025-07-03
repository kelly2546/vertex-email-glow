import { EmailTemplate } from "./EmailTemplate";

interface TradeConfirmationEmailProps {
  customerName: string;
  tradeId: string;
  tradeType: 'BUY' | 'SELL';
  cryptocurrency: string;
  amount: string;
  price: string;
  total: string;
  fee: string;
  timestamp: string;
}

export const TradeConfirmationEmail = ({
  customerName,
  tradeId,
  tradeType,
  cryptocurrency,
  amount,
  price,
  total,
  fee,
  timestamp
}: TradeConfirmationEmailProps) => {
  const isSuccess = true; // You can make this dynamic based on trade status

  return (
    <EmailTemplate>
      <h2 style={{
        margin: '0 0 20px 0',
        fontSize: '28px',
        fontWeight: 'bold',
        color: 'hsl(0, 0%, 100%)'
      }}>
        Trade Confirmation
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
        Your {tradeType.toLowerCase()} order has been successfully executed. Here are the details:
      </p>

      {/* Status Badge */}
      <div style={{
        display: 'inline-block',
        padding: '8px 16px',
        backgroundColor: isSuccess ? 'hsl(120, 60%, 50%)' : 'hsl(0, 72%, 51%)',
        color: 'hsl(0, 0%, 100%)',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '30px'
      }}>
        {isSuccess ? 'EXECUTED' : 'FAILED'}
      </div>

      {/* Trade Details */}
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
          Trade Details
        </h3>

        <table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Trade ID:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              fontFamily: 'monospace',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              {tradeId}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Type:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: tradeType === 'BUY' ? 'hsl(120, 60%, 50%)' : 'hsl(0, 72%, 51%)',
              textAlign: 'right' as const,
              fontWeight: 'bold',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              {tradeType}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Cryptocurrency:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              fontWeight: 'bold',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              {cryptocurrency}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Amount:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              fontFamily: 'monospace',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              {amount}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Price per unit:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              fontFamily: 'monospace',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              ${price}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 70%)',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              Trading Fee:
            </td>
            <td style={{
              padding: '10px 0',
              fontSize: '14px',
              color: 'hsl(0, 0%, 100%)',
              textAlign: 'right' as const,
              fontFamily: 'monospace',
              borderBottom: '1px solid hsl(215, 15%, 25%)'
            }}>
              ${fee}
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '15px 0 5px 0',
              fontSize: '16px',
              color: 'hsl(60, 100%, 50%)',
              fontWeight: 'bold'
            }}>
              Total:
            </td>
            <td style={{
              padding: '15px 0 5px 0',
              fontSize: '16px',
              color: 'hsl(60, 100%, 50%)',
              textAlign: 'right' as const,
              fontFamily: 'monospace',
              fontWeight: 'bold'
            }}>
              ${total}
            </td>
          </tr>
        </table>
      </div>

      <p style={{
        margin: '0 0 10px 0',
        fontSize: '14px',
        color: 'hsl(0, 0%, 70%)'
      }}>
        <strong>Timestamp:</strong> {timestamp}
      </p>

      <p style={{
        margin: '30px 0 0 0',
        fontSize: '16px',
        color: 'hsl(0, 0%, 70%)',
        lineHeight: '1.6'
      }}>
        Thank you for trading with Vertex Trading. Your cryptocurrency has been added to your portfolio.
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
          View Portfolio
        </a>
      </div>
    </EmailTemplate>
  );
};