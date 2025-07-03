import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TradeConfirmationEmail } from "@/components/TradeConfirmationEmail";
import { DepositConfirmationEmail } from "@/components/DepositConfirmationEmail";
import { WithdrawalConfirmationEmail } from "@/components/WithdrawalConfirmationEmail";
import { WelcomeEmail } from "@/components/WelcomeEmail";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("trade");

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "trade":
        return (
          <TradeConfirmationEmail
            customerName="John Smith"
            tradeId="VTX-2025-001234"
            tradeType="BUY"
            cryptocurrency="Bitcoin (BTC)"
            amount="0.5"
            price="98,450.00"
            total="49,250.00"
            fee="25.00"
            timestamp="January 3, 2025 at 2:45 PM UTC"
          />
        );
      case "deposit":
        return (
          <DepositConfirmationEmail
            customerName="John Smith"
            transactionId="DEP-2025-005678"
            amount="10,000.00"
            currency="USD"
            method="Bank Transfer"
            timestamp="January 3, 2025 at 1:30 PM UTC"
            newBalance="15,450.75"
          />
        );
      case "withdrawal":
        return (
          <WithdrawalConfirmationEmail
            customerName="John Smith"
            transactionId="WTH-2025-009012"
            amount="5,000.00"
            currency="USD"
            destination="Bank Account ****1234"
            fee="15.00"
            timestamp="January 3, 2025 at 3:15 PM UTC"
            remainingBalance="10,435.75"
            status="PROCESSING"
          />
        );
      case "welcome":
        return (
          <WelcomeEmail
            customerName="John Smith"
            accountId="VTX-USER-789456"
            verificationLink="https://vertextrading.com/verify?token=abc123"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Controls */}
      <div className="sticky top-0 z-10 bg-card border-b border-border p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Vertex Trading Email Templates
          </h1>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTemplate === "trade" ? "default" : "outline"}
              onClick={() => setSelectedTemplate("trade")}
            >
              Trade Confirmation
            </Button>
            <Button
              variant={selectedTemplate === "deposit" ? "default" : "outline"}
              onClick={() => setSelectedTemplate("deposit")}
            >
              Deposit Confirmation
            </Button>
            <Button
              variant={selectedTemplate === "withdrawal" ? "default" : "outline"}
              onClick={() => setSelectedTemplate("withdrawal")}
            >
              Withdrawal Confirmation
            </Button>
            <Button
              variant={selectedTemplate === "welcome" ? "default" : "outline"}
              onClick={() => setSelectedTemplate("welcome")}
            >
              Welcome Email
            </Button>
          </div>
        </div>
      </div>

      {/* Email Template Display */}
      <div className="max-w-6xl mx-auto p-4">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default Index;
