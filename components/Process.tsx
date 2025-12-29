// Hybrid SSR Component for Process section
import { en } from "@/translations";
import { ProcessAnimated } from "./process/ProcessAnimated";
import { ProcessContent } from "./process/ProcessContent";

const defaultProcess = en.process;

// Static steps data for SSR
const stepsData = [
  {
    number: defaultProcess.steps.discovery.number,
    title: defaultProcess.steps.discovery.title,
    description: defaultProcess.steps.discovery.description,
    services: defaultProcess.steps.discovery.services,
  },
  {
    number: defaultProcess.steps.design.number,
    title: defaultProcess.steps.design.title,
    description: defaultProcess.steps.design.description,
    services: defaultProcess.steps.design.services,
  },
  {
    number: defaultProcess.steps.develop.number,
    title: defaultProcess.steps.develop.title,
    description: defaultProcess.steps.develop.description,
    services: defaultProcess.steps.develop.services,
  },
  {
    number: defaultProcess.steps.deliver.number,
    title: defaultProcess.steps.deliver.title,
    description: defaultProcess.steps.deliver.description,
    services: defaultProcess.steps.deliver.services,
  },
];

export function Process() {
  return (
    <>
      <noscript>
        <ProcessContent
          tag={defaultProcess.tag}
          title={defaultProcess.title}
          subtitle={defaultProcess.subtitle}
          ctaButton={defaultProcess.ctaButton}
          steps={stepsData}
        />
      </noscript>
      <ProcessAnimated />
    </>
  );
}
