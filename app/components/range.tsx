import React from "react";
import Label from "./label";
interface Props {
  name: string;
  title: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  unit?: string;
  onChange: (value: number) => void;
}
export default function Range(Props: Props) {
  const { name, title, min, max, step = 1, value, unit = "px", onChange } =
    Props;
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <Label name={name} title={title} />
        <span className="text-sm font-semibold text-grayLight">
          {step < 1 ? value.toFixed(2) : value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        name={name}
        id={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="range-input"
      />
    </div>
  );
}
