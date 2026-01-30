import {Check} from "lucide-react";
import {Spinner} from "@/components/ui/spinner.tsx";

export type StepStatus = 'pending' | 'in-progress' | 'completed';

export interface DemoStep {
    id: string;
    index: number;
    title: string;
    stepStatus: StepStatus;
    stepIcon: React.ReactNode;
    displayStep: boolean;
    displayDivider: boolean;
}

const DemoStepper = ({stepperSteps, currentStep}: { stepperSteps: DemoStep[], currentStep: DemoStep }) => {

    const isCurrentStep = (step: DemoStep) => {
        return step.id === currentStep.id;
    }

    const getStepIcon = (step: DemoStep) => {
        if (isCurrentStep(step)) {
            return (<Spinner/>);
        } else if (step.stepStatus === "pending") {
            return step.stepIcon;
        } else if (step.stepStatus === "completed") {
            return (<Check/>);
        }
    }

    return (
        <>
            <div className="flex gap-4 justify-center">
                {stepperSteps.filter(step => step.displayStep).map((step) => (
                    <div key={step.id} className="flex items-center gap-3">
                        {step.displayDivider && <div className="w-6 h-1 rounded bg-gray-200"></div>}
                        <div className="flex flex-col items-center">
                            <div className={`flex items-center justify-center border border-gray-200 p-4 w-12 h-12 rounded-full ${step.stepStatus === "completed" ? "bg-green-200" : ""}`}>
                                {getStepIcon(step)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border border-gray-200 p-4 mt-4 rounded">{currentStep.title}</div>
        </>
    );
};

export default DemoStepper;