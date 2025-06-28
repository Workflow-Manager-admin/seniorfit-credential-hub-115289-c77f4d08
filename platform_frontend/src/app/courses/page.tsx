import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/Card";

// PUBLIC_INTERFACE
// Courses route page (protected, placeholder, senior-friendly)
export default function CoursesPage() {
  // TODO: Add authentication check logic here
  return (
    <AppLayout>
      <Card ariaLabel="Courses section" className="mt-8">
        <h1>Courses</h1>
        <p>
          Browse and enroll in SeniorFit certification courses here.
        </p>
        {/* TODO: List of available certifications, filter/search */}
      </Card>
    </AppLayout>
  );
}
