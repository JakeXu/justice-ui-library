import * as React from "react";
import "./index.scss";
import { ButtonAppearances } from "@atlaskit/button";
export interface CardProps {
    children: React.ReactNode;
    customFooter?: JSX.Element | null;
    customHeader?: React.ReactNode;
    cardTitle?: string;
    cardSubTitle?: string;
    cardInfo?: string;
    cardDataQa?: string | null;
    className?: string;
    buttonOnClick?: any;
    buttonText?: string;
    buttonIcon?: string;
    buttonDataQa?: string | null;
    buttonAppearance?: ButtonAppearances;
    buttonDisabled?: boolean;
    noPadding?: boolean;
    noHorizontalMargin?: boolean;
    noTitle?: boolean;
    titleTip?: any;
    smallCard?: boolean;
    Tips?: string;
    customStyleTitleWrapper?: string;
}
export declare class Card extends React.Component<CardProps> {
    componentDidMount(): void;
    render(): JSX.Element;
}