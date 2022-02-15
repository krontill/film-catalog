import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Trans } from '@lingui/macro';

interface Props {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

export const DateFilter: React.FC<Props> = ({ startDate, endDate, setStartDate, setEndDate }) => (
  <div>
    <span>
      <Trans>Release date from</Trans>
    </span>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      showPopperArrow={false}
    />
    <span>
      <Trans>Release date to</Trans>
    </span>
    <DatePicker
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      showPopperArrow={false}
    />
  </div>
);
