import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/Card";

// PUBLIC_INTERFACE
// Exercise Library (protected route, a11y, placeholder)
export default function LibraryPage() {
  // TODO: Add authentication check logic here
  return (
    <AppLayout>
      <Card ariaLabel="Library section" className="mt-8">
        <h1>Exercise Library</h1>
        <p>
          Find senior-safe exercises, videos, and guides.
        </p>
        {/* TODO: Media grid, search/filter, detail modals */}
      </Card>
    </AppLayout>
  );
}
