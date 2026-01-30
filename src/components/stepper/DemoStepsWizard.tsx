import {useState} from "react";
import {BriefcaseBusiness, GraduationCap, Sparkles, UserRoundPen} from "lucide-react";
import DemoStep01 from "@/components/stepper/DemoStep01.tsx";
import {DemoStep02} from "@/components/stepper/DemoStep02.tsx";
import DemoStep03 from "@/components/stepper/DemoStep03.tsx";
import DemoStep04 from "@/components/stepper/DemoStep04.tsx";
import DemoStepper, {type StepStatus} from "@/components/stepper/DemoStepper.tsx";


const DemoStepsWizard = () => {
    const stepperSteps = [
        {
            id: "step-1",
            index: 0,
            title: "Step 01",
            stepStatus: "pending" as StepStatus,
            stepIcon: <Sparkles />
        },
        {
            id: "step-2",
            index: 1,
            title: "Step 02",
            stepStatus: "pending" as StepStatus,
            stepIcon: <UserRoundPen />
        },
        {
            id: "step-3",
            index: 2,
            title: "Step 03",
            stepStatus: "pending" as StepStatus,
            stepIcon: <GraduationCap />
        },
        {
            id: "step-4",
            index: 3,
            title: "Step 04",
            stepStatus: "pending" as StepStatus,
            stepIcon: <BriefcaseBusiness />
        }];

    const [steps, setSteps] = useState(stepperSteps);
    const [currentStep, setCurrentStep] = useState(steps[0]);

    const moveNext = () => {
        const nextIndex = currentStep.index + 1;
        if (nextIndex >= steps.length) {
            return;
        }
        setSteps([...steps.map(e => e.id === currentStep.id ? {...e, stepStatus: "completed" as StepStatus} : e)])
        const nextStep = steps.at(nextIndex);
        if (nextStep) {
            setCurrentStep(nextStep);
        }
    }

    const movePrev = () => {
        const prevIndex = currentStep.index - 1;
        if (prevIndex < 0) {
            return;
        }
        setSteps([...steps.map(e => e.id === currentStep.id ? {...e, stepStatus: "pending" as StepStatus} : e)])
        const prevStep = steps.at(prevIndex);
        if (prevStep) {
            setCurrentStep(prevStep);
        }
    }

    const hasNext = () => {
        const nextIndex = currentStep.index + 1;
        return nextIndex < steps.length;
    }

    const hasPrev = () => {
        const prevIndex = currentStep.index - 1;
        return prevIndex >= 0;
    }

    return (
            <div className="flex flex-col gap-4">
                <div>
                    <DemoStepper stepperSteps={steps} currentStep={currentStep}/>
                </div>
                <div className="flex flex-col gap-4 justify-center min-h-100 p-2 items-center border border-gray-200 rounded">
                    {currentStep.index === 0 && <DemoStep01 onPrev={() => movePrev()} onNext={() => moveNext()} hasPrev={hasPrev()} hasNext={hasNext()}/>}
                    {currentStep.index === 1 && <DemoStep02 onPrev={() => movePrev()} onNext={() => moveNext()} hasPrev={hasPrev()} hasNext={hasNext()}/>}
                    {currentStep.index === 2 && <DemoStep03 onPrev={() => movePrev()} onNext={() => moveNext()} hasPrev={hasPrev()} hasNext={hasNext()}/>}
                    {currentStep.index === 3 && <DemoStep04 onPrev={() => movePrev()} onNext={() => moveNext()} hasPrev={hasPrev()} hasNext={hasNext()}/>}
                </div>
            </div>
    );
};

export default DemoStepsWizard;