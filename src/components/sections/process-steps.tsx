import { PremiumCard } from "@/components/ui/card";

const steps = [
  {
    title: "A child meets Lumi",
    body: "A friendly interactive character creates a safe and engaging entry point.",
  },
  {
    title: "Lumi introduces a situation",
    body: "The child is guided through an everyday emotional or social scenario.",
  },
  {
    title: "The child practices a response",
    body: "The interaction encourages reflection, recognition, and age-appropriate communication.",
  },
  {
    title: "Learning becomes more concrete",
    body: "Repeated interaction supports stronger emotional vocabulary and better everyday understanding.",
  },
];

export function ProcessSteps() {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <PremiumCard
          body={step.body}
          className="stagger-item"
          index={`0${index + 1}`}
          key={step.title}
          title={step.title}
          variant="minimal"
        />
      ))}
    </div>
  );
}
