import React from 'react';
import { ViewStyle } from 'react-native';
import { ViewPropTypes } from '../view';
import { TextPropTypes } from '../text';
import { ImageProps } from '../image';
declare type ContentType = TextPropTypes & {
    text?: string;
};
export declare type CardSectionProps = ViewPropTypes & {
    /**
     * Text content for the CardSection.
     * Example: content={[{text: 'You’re Invited!', text70: true, dark10: true}]}
     */
    content?: ContentType[];
    /**
     * Style for the content
     */
    contentStyle?: ViewStyle;
    /**
     * Image props for a leading icon to render before the text
     */
    leadingIcon?: ImageProps;
    /**
     * Image props for a trailing icon to render after the text
     */
    trailingIcon?: ImageProps;
};
declare const _default: React.ComponentClass<CardSectionProps, any> | React.FunctionComponent<CardSectionProps>;
export default _default;
