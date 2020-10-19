import React from "react";
import {
  ResumeBuilderAction,
  ResumeBuilderBasicDetails,
  ResumeEducation,
  ResumeSkills,
  ResumeWork,
} from "resume-builder/components";
import {
  initialState,
  initialStateEducation,
  initialStateWorks,
  IResumeBuilderContainerProps,
  IResumeState,
  skills,
} from ".";
import { editState } from "..";

export const ResumeBuilderContainer: React.FC<IResumeBuilderContainerProps> = ({ resumeId }) => {
  const [state, setState] = React.useState<IResumeState>(initialState);

  React.useEffect(() => {
    // fetch using resume Id
    if (resumeId && resumeId >= 0) {
      setState((prevState) => {
        return {
          ...prevState,
          loading: true,
        };
      });
      setTimeout(() => {
        setState(editState);
      }, 1000);
    }
  }, [resumeId]);

  React.useEffect(() => {
    // fetch when refresh
    if (state.refresh) {
      setState((prevState) => {
        return {
          ...prevState,
          loading: true,
          refresh: false,
        };
      });
      setTimeout(() => {
        setState((prevState) => {
          return {
            ...prevState,
            loading: false,
            formState: { ...initialState.formState },
          };
        });
      }, 1000);
    }
  }, [state.refresh]);

  const onChangeBasicDetails = (key: string, value: string) => {
    setState((prevState) => {
      const { formState } = prevState;
      return {
        ...prevState,
        formState: {
          ...formState,
          basicDetails: { ...prevState.formState.basicDetails, [key]: value },
        },
      };
    });
  };

  const onSave = () => {
    console.log("saving...", state.formState);
  };

  const onReset = () => {
    setState((prevState) => {
      return {
        ...prevState,
        refresh: true,
      };
    });
  };

  const onUpdateSkills = React.useCallback(
    (newSkills: string[]) => {
      setState((prevState) => {
        const { formState } = prevState;
        return {
          ...prevState,
          formState: {
            ...formState,
            skills: newSkills,
          },
        };
      });
    },
    [setState]
  );

  const onUpdateEducations = React.useCallback(
    (index: number, id: string, value: string) => {
      setState((prevState) => {
        const { formState } = prevState;
        const items = [...formState.educations];
        const item = { ...items[index], [id]: value };
        items[index] = item;
        return {
          ...prevState,
          formState: {
            ...formState,
            educations: items,
          },
        };
      });
    },
    [setState]
  );

  const onUpdateWorks = React.useCallback(
    (index: number, id: string, value: string) => {
      setState((prevState) => {
        const { formState } = prevState;
        const items = [...formState.experiences];
        const item = { ...items[index], [id]: value };
        items[index] = item;
        return {
          ...prevState,
          formState: {
            ...formState,
            experiences: items,
          },
        };
      });
    },
    [setState]
  );

  const onAddNewEducation = React.useCallback(() => {
    setState((prevState) => {
      const { formState } = prevState;
      const items = [...formState.educations];
      items.push(initialStateEducation);
      return {
        ...prevState,
        formState: {
          ...formState,
          educations: items,
        },
      };
    });
  }, [setState]);

  const onAddNewWork = React.useCallback(() => {
    setState((prevState) => {
      const { formState } = prevState;
      const items = [...formState.experiences];
      items.push(initialStateWorks);
      return {
        ...prevState,
        formState: {
          ...formState,
          experiences: items,
        },
      };
    });
  }, [setState]);

  const { loading, formState } = state;

  return (
    <div className={"container shadow mt-4 mb-4 p-4"}>
      {loading ? (
        <div className="d-block text-center">
          <div className="spinner-border text-primary" />
        </div>
      ) : (
        <>
          <h3 className="text-center text-secondary mb-4">Resume Builder</h3>
          <ResumeBuilderBasicDetails onChange={onChangeBasicDetails} model={formState.basicDetails} />
          <div className="mb-4" />
          <ResumeSkills skills={formState.skills} items={skills} onUpdateSkills={onUpdateSkills} />
          <div className="mb-4" />
          <ResumeEducation
            educations={formState.educations}
            onUpdateEducations={onUpdateEducations}
            onAddNewEducation={onAddNewEducation}
          />
          <div className="mb-4" />
          <ResumeWork experiences={formState.experiences} onUpdateWork={onUpdateWorks} onAddNewWork={onAddNewWork} />
          <div className="mb-4" />
          <ResumeBuilderAction onSave={onSave} onReset={onReset} isDirty={false} isSubmitting={false} />
        </>
      )}
    </div>
  );
};
