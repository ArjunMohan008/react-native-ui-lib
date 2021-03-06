import React from 'react';
import { ViewStyle, ImageStyle, ImageSourcePropType } from 'react-native';
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
     * Give the section a background color
     */
    backgroundColor?: string;
    /**
     * Image props for a leading icon to render before the text
     */
    leadingIcon?: ImageProps;
    /**
     * Image props for a trailing icon to render after the text
     */
    trailingIcon?: ImageProps;
    /**
     * Will be used for the background when provided
     */
    imageSource?: ImageSourcePropType;
    /**
     * The style for the background image
     */
    imageStyle?: ImageStyle;
    /**
     * Other image props that will be passed to the image
     */
    imageProps?: ImageProps;
};
declare const _default: React.ComponentClass<CardSectionProps, any>;
export default _default;
