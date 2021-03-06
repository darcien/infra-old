import React, { useState, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TextInput from '../TextInput/TextInput';

import { HourFormat } from '../../helpers/timeChecker';
import useTheme from '../../helpers/useTheme';
import { createTimeForDisplay } from '../../helpers/displayTime';
import { TimePickerProps } from './types';

export default function TimePicker(props: TimePickerProps) {
  let {
    format = '12' as HourFormat,
    date,
    placeholder = '',
    title = '',
    onChangeTime,
    style,
  } = props;
  let { colors } = useTheme();

  let [visible, setVisible] = useState(false);

  let is24Hour = format === '24';

  let toggleModal = () => setVisible(!visible);
  let changeDate = (d: Date) => {
    let newDate = d.toISOString();
    onChangeTime && onChangeTime(newDate);
    toggleModal();
  };
  let displayTime = useMemo(() => createTimeForDisplay(date, format), [
    date,
    format,
  ]);

  return (
    <>
      <TouchableOpacity activeOpacity={0.7} onPress={toggleModal}>
        <TextInput
          disabled
          mode="outlined"
          label="Time"
          value={displayTime}
          placeholder={placeholder}
          pointerEvents="none"
          containerStyle={{
            borderColor: colors.border,
            backgroundColor: colors.surface,
          }}
          style={[{ backgroundColor: colors.surface }, style]}
        />
      </TouchableOpacity>
      <DateTimePicker
        date={new Date(date)}
        titleIOS={title}
        // NOTE: Android only
        is24Hour={is24Hour}
        // NOTE: For determining 12h or 24h in iOS
        locale={is24Hour ? 'id-ID' : 'en-US'}
        isVisible={visible}
        mode="time"
        onConfirm={changeDate}
        onCancel={toggleModal}
      />
    </>
  );
}
