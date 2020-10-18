import React from "react";
import { useParams } from "react-router-dom";
import { ResumeBuilderContainer } from "resume-builder/containers/ResumeBuilderContainer";
import { IResumeBuilderParams } from "./ResumeBuilder.types";

export const ResumeBuilder: React.FC = () => {
  const { resumeId } = useParams<IResumeBuilderParams>();

  return (
    <div className="container">
      <ResumeBuilderContainer resumeId={Number(resumeId ?? 0)} />
    </div>
  );
};
