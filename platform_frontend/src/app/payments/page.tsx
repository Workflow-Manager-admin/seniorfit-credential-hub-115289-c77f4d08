import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/Card";

// PUBLIC_INTERFACE
// Payments route page (protected, skeleton, a11y)
export default function PaymentsPage() {
  // TODO: Add authentication check logic here
  return (
    <AppLayout>
      <Card ariaLabel="Payments section" className="mt-8">
        <h1>Payments</h1>
        <p>
          Manage your subscriptions, invoices, and payment history.
        </p>
        {/* TODO: Payment method integration, Stripe, invoice list */}
      </Card>
    </AppLayout>
  );
}
