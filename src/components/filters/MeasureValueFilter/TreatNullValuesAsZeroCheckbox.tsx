// (C) 2020 GoodData Corporation
import * as React from "react";
import BubbleHoverTrigger from "@gooddata/goodstrap/lib/Bubble/BubbleHoverTrigger";
import Bubble from "@gooddata/goodstrap/lib/Bubble/Bubble";
import { WrappedComponentProps } from "react-intl";

export interface ITreatNullValuesAsZeroCheckboxProps {
    checked?: boolean;
    onChange: (checked: boolean) => void;
}

const TreatNullValuesAsZeroCheckbox = ({
    checked = false,
    onChange,
    intl,
}: ITreatNullValuesAsZeroCheckboxProps & WrappedComponentProps) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked);

    return (
        <label
            className={"input-checkbox-label gd-mvf-treat-null-values-as-zero s-treat-null-values-as-zero"}
        >
            <input
                type="checkbox"
                name={"treat-null-values-as"}
                className={"input-checkbox"}
                checked={checked}
                onChange={handleOnChange}
            />
            <span className="input-label-text">
                {intl.formatMessage({ id: "mvf.treatNullValuesAsZeroLabel" })}
                <BubbleHoverTrigger showDelay={400} hideDelay={200}>
                    <span className={"inlineBubbleHelp"} />
                    <Bubble className="bubble-primary" alignPoints={[{ align: "tc bl" }]}>
                        {intl.formatMessage({ id: "mvf.treatNullValuesAsZeroTooltip" })}
                    </Bubble>
                </BubbleHoverTrigger>
            </span>
        </label>
    );
};

export default TreatNullValuesAsZeroCheckbox;
