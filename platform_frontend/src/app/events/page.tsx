import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/Card";

// PUBLIC_INTERFACE
// Events/Live Sessions (protected, a11y, placeholder)
export default function EventsPage() {
  // TODO: Add authentication check logic here
  return (
    <AppLayout>
      <Card ariaLabel="Events section" className="mt-8">
        <h1>Events & Live Sessions</h1>
        <p>
          Join live webinars and events tailored for senior trainers.
        </p>
        {/* TODO: Calendar/list, join/RSVP actions */}
      </Card>
    </AppLayout>
  );
}
