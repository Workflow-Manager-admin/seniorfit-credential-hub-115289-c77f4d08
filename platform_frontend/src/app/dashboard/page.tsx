import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/Card";

// PUBLIC_INTERFACE
// Dashboard route page (protected, senior-friendly, placeholder content)
export default function DashboardPage() {
  // TODO: Add authentication check logic here
  // Example: if (!user) redirect('/login')
  return (
    <AppLayout>
      <Card ariaLabel="Dashboard section" className="mt-8">
        <h1>Dashboard</h1>
        <p>
          Welcome to your SeniorFit dashboard!
        </p>
        {/* TODO: Insert cards for credentials, progress, and actions here */}
      </Card>
    </AppLayout>
  );
}
