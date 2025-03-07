import React from 'react';
import { FONTS } from '../../styles/typography';
import { useLabelStyle } from './LabelTextStyle';
import AppText from '../../components/text/AppText';
import { RootStackParamList } from '../../constants/routeConstant';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

interface Props {
  value?: string;
  price?: number;
  keyText?: string;
  otherValue?: string;
  numberOrLine?: number;
  keyStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
  comeFrom?: keyof RootStackParamList;
  labelFontFamily?: keyof typeof FONTS;
  valueFontFamily?: keyof typeof FONTS;
  labelContainer?: StyleProp<ViewStyle>;
  otherValueStyle?: StyleProp<TextStyle>;
}

const LabelText = React.memo(
  ({
    value,
    keyText,
    keyStyle,
    valueStyle,
    numberOrLine,
    labelContainer,
    valueFontFamily,
    labelFontFamily,
  }: Props) => {
    const { styles } = useLabelStyle();

    return (
      <View style={[styles.labelContainer, labelContainer]}>
        <AppText
          numberOfLines={3}
          fontFamily={labelFontFamily || 'regular'}
          style={[styles.key, keyStyle]}>
          {keyText || ''}
        </AppText>
        {value && (
            <AppText
              fontFamily={valueFontFamily || 'regular'}
              style={[styles.key, keyStyle]}>
              {' : '}
              <AppText
                numberOfLines={numberOrLine && numberOrLine}
                fontFamily={valueFontFamily || 'regular'}
                style={[styles.labelText, valueStyle]}>
                {value || ''}
              </AppText>{' '}
            </AppText>
          )}
      </View>
    );
  },
);

export default LabelText;
