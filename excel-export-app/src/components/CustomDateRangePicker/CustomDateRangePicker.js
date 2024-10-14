// src/components/DateRangePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './customdaterangepicker.css';
import {
    addDays,
    subDays,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    format,
} from 'date-fns';

const CustomDateRangePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [range, setRange] = useState('');
    const [error, setError] = useState('');

    const handleRangeChange = (selectedRange) => {
        const today = new Date();
        setRange(selectedRange);
        setError('');
        switch (selectedRange) {
            case 'Today':
                setStartDate(today);
                setEndDate(today);
                break;
            case 'Yesterday':
                setStartDate(subDays(today, 1));
                setEndDate(subDays(today, 1));
                break;
            case 'LastTwoDays':
                setStartDate(subDays(today, 2));
                setEndDate(today);
                break;
            case 'LastThreeDays':
                setStartDate(subDays(today, 3));
                setEndDate(today);
                break;
            case 'LastSevenDays':
                setStartDate(subDays(today, 7));
                setEndDate(today);
                break;
            case 'LastTenDays':
                setStartDate(subDays(today, 10));
                setEndDate(today);
                break;
            case 'Last15Days':
                setStartDate(subDays(today, 15));
                setEndDate(today);
                break;
            case 'CurrentWeek':
                setStartDate(startOfWeek(today));
                setEndDate(endOfWeek(today));
                break;
            case 'LastWeek':
                setStartDate(startOfWeek(subDays(today, 7)));
                setEndDate(endOfWeek(subDays(today, 7)));
                break;
            case 'CurrentMonth':
                setStartDate(startOfMonth(today));
                setEndDate(endOfMonth(today));
                break;
            case 'LastMonth':
                setStartDate(startOfMonth(subDays(today, 30)));
                setEndDate(endOfMonth(subDays(today, 30)));
                break;
            case 'Custom':
                setStartDate(null);
                setEndDate(null);
                break;
            default:
                setStartDate(null);
                setEndDate(null);
        }
    };

    const handleCustomDateChange = (start, end) => {
        setError('');
        if (start && end && end < start) {
            setError('End date cannot be before start date.');
        } else {
            setStartDate(start);
            setEndDate(end);
        }
    };

    const getHighlightClass = () => {
        switch (range) {
            case 'Today':
            case 'Yesterday':
            case 'LastTwoDays':
            case 'LastThreeDays':
                return 'react-datepicker__day--highlighted-range-1';
            case 'LastSevenDays':
            case 'LastTenDays':
            case 'Last15Days':
                return 'react-datepicker__day--highlighted-range-2';
            case 'CurrentWeek':
            case 'LastWeek':
                return 'react-datepicker__day--highlighted-range-3';
            case 'CurrentMonth':
            case 'LastMonth':
                return 'react-datepicker__day--highlighted-range-4';
            default:
                return '';
        }
    };

    const highlightWithRanges = [
        {
            [getHighlightClass()]: [startDate, endDate],
        },
    ];

    return (
        <div className="date-range-picker">
            <select onChange={(e) => handleRangeChange(e.target.value)}>
                <option value="">Select Date Range</option>
                <option value="Today">Today</option>
                <option value="Yesterday">Yesterday</option>
                <option value="LastTwoDays">Last Two Days</option>
                <option value="LastThreeDays">Last Three Days</option>
                <option value="LastSevenDays">Last Seven Days</option>
                <option value="LastTenDays">Last Ten Days</option>
                <option value="Last15Days">Last 15 Days</option>
                <option value="CurrentWeek">Current Week</option>
                <option value="LastWeek">Last Week</option>
                <option value="CurrentMonth">Current Month</option>
                <option value="LastMonth">Last Month</option>
                <option value="Custom">Custom</option>
            </select>

            <div className="date-picker">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => handleCustomDateChange(date, endDate)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                    highlightDates={highlightWithRanges}
                    disabled={startDate !== null && endDate !== null}
                />
                <DatePicker
                    selected={endDate}
                    onChange={(date) => handleCustomDateChange(startDate, date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
                    highlightDates={highlightWithRanges}
                    disabled={startDate !== null && endDate !== null}
                />
            </div>

            {startDate && endDate && !error && (
                <div className="selected-range">
                    Selected Range: {format(startDate, 'MM/dd/yyyy')} - {format(endDate, 'MM/dd/yyyy')}
                </div>
            )}

            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default CustomDateRangePicker;
