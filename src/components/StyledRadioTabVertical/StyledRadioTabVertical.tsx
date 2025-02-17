/*
 * Copyright (c) 2018-2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import "./index.scss";
import { FieldErrorMessage, FieldLabel } from "../Form/utility/FormUtility";
import { RadioOption } from "../../types";
import { addLineBreaks } from "../../utils";

export interface RadioOptionWithRenderAction<T = string> extends RadioOption<T> {
  render?: () => React.ReactNode;
  dataQaProps?: string | null;
}

interface Props {
  label?: string;
  options: RadioOptionWithRenderAction<string | boolean>[];
  selectedRadio: string | boolean;
  onChange: (item: RadioOption<string | boolean>) => void;
  disabled?: boolean;
  errMessage?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  tooltip?: string;
  dataQa?: string | null;
  className?: string;
}

export const StyledRadioTabVertical = ({
  label,
  options = [],
  selectedRadio,
  onChange,
  errMessage,
  isInvalid,
  disabled = false,
  isRequired = false,
  tooltip,
  className,
  dataQa = null,
}: Props) => {
  return (
    <div className={className}>
      {!!label && <FieldLabel {...{ label, tooltip }} />}
      <div className={classNames(["styled-radio-tab-vertical"])} data-qa-id={dataQa}>
        {options.map((item) => (
          <div key={`radio-tab-vertical-${item.value}`} className={"radio-container"}>
            <div
              className={classNames("radio-item", {
                disabled,
                selected: item.value === selectedRadio,
              })}
              data-qa-props={item.dataQaProps}
              {...(!disabled && item.value !== selectedRadio && { onClick: onChange.bind(null, item) })}
              key={String(item.value)}
            >
              <span className="radio-icon" />
              <span className="radio-label">{item.label}</span>
              {item.value === selectedRadio && !!item.helper && (
                <span className="radio-helper">{addLineBreaks(item.helper)}</span>
              )}
            </div>
            {item.value === selectedRadio && !!item.render && <div className={"render-content"}>{item.render()}</div>}
          </div>
        ))}
      </div>
      {isRequired && isInvalid && errMessage && <FieldErrorMessage message={errMessage} />}
    </div>
  );
};
