import React from 'react';
import { ColorValue } from 'react-native';
import CheckBox from '../../components/checkBox/CheckBox';
import {Controller, Control, FieldValues} from 'react-hook-form';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';

interface Props {
  label: string;
  controllerName: string;
  checkColor?: ColorValue;
  control: Control<FieldValues> | undefined;
}

const CheckBoxController = React.memo(
  ({control, label, controllerName, checkColor }: Props) => {

    return (
      <Controller
        control={control}
        name={controllerName}
        render={({fieldState: {error}, field: {onChange, value}}) => (
          <>
            <CheckBox value={value} onChange={onChange} labelField={label} checkBoxSide={'Right'}  checkColor={checkColor}/>
            <ErrorMessage error={error?.message} />
          </>
        )}
      />
    );
  },
);

export default CheckBoxController;
