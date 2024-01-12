import React from "react";
import "./index.css";

const Checkbox = ({ name, value, label, checked, onChange }) => (
  <label>
    <input
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);

const DaysSelector = ({ selectedDays, onChange }) => {
  const daysOfWeek = [
    { value: "1", label: "Mon" },
    { value: "2", label: "Tues" },
    { value: "3", label: "Wed" },
    { value: "4", label: "Thur" },
    { value: "5", label: "Fri" },
    { value: "6", label: "Sat" },
    { value: "7", label: "Sun" },
  ];

  return (
    <div className="shared-day-picker">
      <div className="shared-days">
        {daysOfWeek.map(({ value, label }) => (
          <Checkbox
            key={value}
            name="opening_days"
            value={value}
            label={label}
            checked={selectedDays.includes(value)}
            onChange={onChange}
          />
        ))}
      </div>
      {/* <div>
        <p>Selected Days: {JSON.stringify(selectedDays)}</p>
      </div> */}
    </div>
  );
};

export default DaysSelector;
