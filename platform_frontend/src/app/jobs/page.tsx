import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/Card";

// PUBLIC_INTERFACE
// Job Board (protected, placeholder, accessible)
export default function JobsPage() {
  // TODO: Add authentication check logic here
  return (
    <AppLayout>
      <Card ariaLabel="Jobs section" className="mt-8">
        <h1>Job Board</h1>
        <p>
          Apply for roles targeting credentialed SeniorFit specialists.
        </p>
        {/* TODO: Job list, filters, apply workflow */}
      </Card>
    </AppLayout>
  );
}
