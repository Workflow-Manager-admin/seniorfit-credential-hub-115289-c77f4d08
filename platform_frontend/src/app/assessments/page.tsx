import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/Card";

// PUBLIC_INTERFACE
// Assessments page (protected, a11y, placeholder)
export default function AssessmentsPage() {
  // TODO: Add authentication check logic here
  return (
    <AppLayout>
      <Card ariaLabel="Assessments section" className="mt-8">
        <h1>Assessments</h1>
        <p>
          Complete online quizzes, assignments, and case studies.
        </p>
        {/* TODO: List ongoing/past assessments, quick access */}
      </Card>
    </AppLayout>
  );
}
