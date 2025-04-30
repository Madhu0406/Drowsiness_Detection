import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function EyeDetection() {
  const [isDetecting, setIsDetecting] = useState(false);
  const [eyeState, setEyeState] = useState("Unknown");
  const [alert, setAlert] = useState(false);

  const startDetection = () => {
    setIsDetecting(true);
    setEyeState("Open");
    setAlert(false);
    // Simulating backend connection
    setTimeout(() => {
      setEyeState("Closed");
      setAlert(true);
    }, 5000);
  };

  const stopDetection = () => {
    setIsDetecting(false);
    setEyeState("Unknown");
    setAlert(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-3xl font-bold mb-5">Eye Detection System</h1>
      <Card className="p-6 bg-gray-800 rounded-xl shadow-lg w-full max-w-md">
        <CardContent className="flex flex-col items-center">
          <div className="w-48 h-48 bg-gray-700 flex items-center justify-center rounded-lg">
            <span className="text-xl font-semibold">{eyeState}</span>
          </div>
          {alert && (
            <MotionDiv className="flex items-center bg-red-500 p-2 mt-4 rounded-md" animate={{ opacity: [0, 1] }}>
              <AlertTriangle className="mr-2" /> Eyes closed for too long!
            </MotionDiv>
          )}
          <div className="flex gap-4 mt-4">
            {!isDetecting ? (
              <Button className="bg-blue-500" onClick={startDetection}>Start Detection</Button>
            ) : (
              <Button className="bg-red-500" onClick={stopDetection}>Stop Detection</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
