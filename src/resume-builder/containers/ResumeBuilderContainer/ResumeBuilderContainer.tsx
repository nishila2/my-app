import React from "react";
import { ResumeBuilderAction, ResumeBuilderBasicDetails } from "resume-builder/components";
import { IResumeBuilderContainerProps, IResumeState } from ".";

const initialState = {
  loading: false,
  refresh: false,
  formState: {
    basicDetails: {
      name: "",
      phone: "",
      address: "",
      email: "",
    },
  },
} as IResumeState;

export const ResumeBuilderContainer: React.FC<IResumeBuilderContainerProps> = ({ resumeId }) => {
  const [state, setState] = React.useState<IResumeState>(initialState);

  React.useEffect(() => {
    // fetch using resume Id
    setState((prevState) => {
      return {
        ...prevState,
        loading: true,
      };
    });
    setTimeout(() => {
      setState((prevState) => {
        return {
          ...prevState,
          loading: false,
        };
      });
    }, 1000);
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
          };
        });
      }, 1000);
    }
  }, [state.refresh]);

  const onChangeBasicDetails = (key: string, value: string) => {
    setState((prevState) => {
      return {
        ...prevState,
        formState: {
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
          <ResumeBuilderAction onSave={onSave} onReset={onReset} isDirty={false} isSubmitting={false} />
        </>
      )}
    </div>
  );
};
