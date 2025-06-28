import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/Card";

// PUBLIC_INTERFACE
// Community/Forums (protected, placeholder, accessible)
export default function CommunityPage() {
  // TODO: Add authentication check logic here
  return (
    <AppLayout>
      <Card ariaLabel="Community section" className="mt-8">
        <h1>Community & Forums</h1>
        <p>
          Join discussions, ask questions, and connect with the SeniorFit network.
        </p>
        {/* TODO: Forum threads, upvotes, quick reply */}
      </Card>
    </AppLayout>
  );
}
