import {Button} from "@/components/ui/button.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";

const DemoStep03 = ({onPrev, onNext, hasPrev, hasNext}:
                    { onPrev: () => void, onNext: () => void, hasPrev: boolean, hasNext: boolean }) => {
    return (
        <>
            <div className="flex gap-4 justify-center items-center min-h-100 w-full">
                <div>Welcome to Step 03</div>
            </div>
            <div className="flex gap-4 justify-center">
                <Button className="cursor-pointer h-8 w-8 rounded-full" onClick={() => onPrev()} disabled={!hasPrev}>
                    <ChevronLeft strokeWidth={3.5}/>
                </Button>
                <Button className="cursor-pointer h-8 w-8 rounded-full" onClick={() => onNext()} disabled={!hasNext}>
                    <ChevronRight strokeWidth={3.5}/>
                </Button>
            </div>

        </>
    );
};

export default DemoStep03;