import React, { useEffect, useState } from "react";
import "./TypeAhead.css";
import { ITypeAheadProps } from ".";

export const TypeAhead: React.FC<ITypeAheadProps> = (props) => {
  const { defaultValue, items } = props;
  const [state, setState] = useState({
    options: [] as any[],
    s: "",
    sIndex: -1,
    load: false,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      s: defaultValue,
    }));
  }, [defaultValue]);

  useEffect(() => {
    if (state.s !== "") {
      setState((prevState) => ({
        ...prevState,
        options: items.filter((x) => x.toLowerCase().includes(prevState.s.toLowerCase())),
      }));
    } else {
      setState((prevState) => ({ ...prevState, options: [] }));
    }
  }, [items, state.s]);

  const updateOptions = (sIndex: number) => {
    if (state.s !== "") {
      setState((prevState) => ({
        ...prevState,
        sIndex: sIndex,
        load: true,
        options: items.filter((x) => x.toLowerCase().includes(prevState.s.toLowerCase())),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        sIndex: sIndex,
        load: true,
        options: items,
      }));
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setState((prevState) => ({
      ...prevState,
      sIndex: 0,
      load: true,
      s: (event.target as HTMLInputElement).value,
    }));
  };

  const onBlur = () => {
    setState((prevState) => ({
      ...prevState,
      load: false,
      sIndex: -1,
      options: [],
    }));
  };

  const onFocus = () => updateOptions(0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 27) {
      setState((prevState) => ({ ...prevState, options: [], load: false }));
    } else if (event.keyCode === 13 && state.options.length > 0 && state.sIndex > -1) {
      setState((prevState) => ({
        ...prevState,
        options: [],
        sIndex: -1,
        load: false,
        s: prevState.options[prevState.sIndex],
      }));
    } else if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
      event.stopPropagation();
      const length = state.options.length;
      if (length === 0) {
        updateOptions(0);
      }
      if (length > 0) {
        const suggestionIndex = (state.sIndex + length + (event.keyCode - 39)) % length;
        updateOptions(suggestionIndex);
      }
      return;
    }
  };

  const onClick = (value: string) => () => {
    setState((prevState) => ({
      ...prevState,
      s: value,
      options: [],
      sIndex: -1,
      load: false,
    }));
  };

  return (
    <>
      <div className="input-container">
        <input
          onChange={onChange}
          type="text"
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
          value={state.s}
          className="form-control"
          onMouseDown={onFocus}
        />
        {state.options.length > 0 && state.load && (
          <div className="input-dropdown">
            <ul>
              {state.options.map((item, index) => {
                return (
                  <li
                    className={`d-block ${index === state.sIndex ? "selected" : ""}`}
                    key={`${index}`}
                    onMouseDown={onClick(item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
