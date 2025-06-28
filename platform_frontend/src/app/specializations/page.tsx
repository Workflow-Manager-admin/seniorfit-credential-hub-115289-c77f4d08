import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/Card";

// PUBLIC_INTERFACE
// Specializations (protected, placeholder)
export default function SpecializationsPage() {
  // TODO: Add authentication check logic here
  return (
    <AppLayout>
      <Card ariaLabel="Specializations section" className="mt-8">
        <h1>Specialization Tracks</h1>
        <p>
          Explore advanced tracks: arthritis, balance, cognitive health, and more.
        </p>
        {/* TODO: List badges, dynamic track content */}
      </Card>
    </AppLayout>
  );
}
