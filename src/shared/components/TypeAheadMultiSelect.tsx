import React, { useEffect, useState } from "react";
import { ITypeAheadMultiSelectProps } from ".";
import "./TypeAhead.css";

export const TypeAheadMultiSelect: React.FC<ITypeAheadMultiSelectProps> = (props) => {
  const { defaultValue, items, onUpdate } = props;
  const [state, setState] = useState({
    options: [] as string[],
    s: "",
    sIndex: -1,
    load: false,
    top: 0,
  });
  const txtRef = React.useRef<HTMLInputElement>(null);
  const divRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divHeight = divRef.current?.clientHeight ?? 0;
    const top = divHeight > 30 ? divHeight - 36 : 0;
    setState((prevState) => ({
      ...prevState,
      load: true,
      top,
    }));
  }, [defaultValue]);

  useEffect(() => {
    if (state.s !== "") {
      setState((prevState) => ({
        ...prevState,
        load: true,
        options: items.filter((x) => x.toLowerCase().includes(prevState.s.toLowerCase()) && !defaultValue.includes(x)),
      }));
    } else {
      setState((prevState) => ({ ...prevState, options: [] }));
    }
  }, [state.s, items, defaultValue]);

  const updateOptions = (sIndex: number) => {
    if (state.s !== "") {
      setState((prevState) => ({
        ...prevState,
        sIndex: sIndex,
        load: true,
        options: items.filter((x) => x.toLowerCase().includes(prevState.s.toLowerCase()) && !defaultValue.includes(x)),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        sIndex: sIndex,
        load: true,
        options: items.filter((x) => !defaultValue.includes(x)),
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
      onUpdate([...defaultValue, state.options[state.sIndex]]);
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
    onUpdate([...defaultValue, value]);
  };

  const removeAll = () => {
    onUpdate([]);
  };

  const onFocusInput = () => txtRef.current?.focus();

  const removeValue = (item: string) => () => {
    onUpdate(defaultValue.filter((x) => x !== item));
  };

  const { options, load, sIndex, s, top } = state;

  return (
    <>
      <div className="type-ahead-container">
        <div className="type-ahead-control">
          <div className="type-ahead-wrapper" onClick={onFocusInput} ref={divRef}>
            {defaultValue.length > 0 &&
              defaultValue.map((item, index) => {
                return (
                  <div key={`multiValue_${index}`} className="type-ahead-multiValue">
                    <div className="item">{item}</div>
                    <div className="icon" onClick={removeValue(item)}>
                      <svg
                        height="14"
                        width="14"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        className="type-ahead-Svg"
                      >
                        <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                      </svg>
                    </div>
                  </div>
                );
              })}
            <div className="type-ahead-input-container">
              <div className="d-inline-block">
                <input
                  ref={txtRef}
                  onChange={onChange}
                  onMouseDown={onFocus}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onKeyDown={handleKeyDown}
                  value={s}
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect="off"
                  id="react-select-14-input"
                  spellCheck="false"
                  tabIndex={0}
                  type="text"
                  placeholder={defaultValue.length === 0 ? "Select..." : ""}
                  aria-autocomplete="list"
                  style={{
                    boxSizing: "content-box",
                    background: "0px center",
                    border: "0px",
                    fontSize: "inherit",
                    opacity: 1,
                    outline: "0px",
                    padding: "0px",
                    color: "inherit",
                  }}
                />
              </div>
            </div>
          </div>
          {defaultValue.length > 0 && (
            <div className="type-ahead-indicatorWrapper">
              <div aria-hidden="true" className="type-ahead-indicatorContainer" onClick={removeAll}>
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="type-ahead-Svg"
                >
                  <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
                </svg>
              </div>
            </div>
          )}
          {options.length > 0 && load && (
            <div className="input-container">
              <div className="input-dropdown ml-0 mr-0" style={{ top: `${top}px` }}>
                <ul>
                  {options.map((item, index) => {
                    return (
                      <li
                        className={`d-block ${index === sIndex ? "selected" : ""}`}
                        key={`${index}`}
                        onMouseDown={onClick(item)}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
