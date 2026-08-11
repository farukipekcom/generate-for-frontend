"use client";
import React, { useState } from "react";
import Range from "../../components/range";
import Select from "../../components/select";
import Code from "../../components/code";
import Output from "../../components/output";
import CssPreview from "../../components/css-preview";
import BezierPreview from "../../components/bezier-preview";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Section from "../../components/section";
import easingPresets from "../../json/easingPresets.json";
import { buildCssFormats } from "../../lib/css-formats";
const presetValues: Record<
  string,
  { p1x: number; p1y: number; p2x: number; p2y: number }
> = {
  ease: { p1x: 0.25, p1y: 0.1, p2x: 0.25, p2y: 1 },
  "ease-in": { p1x: 0.42, p1y: 0, p2x: 1, p2y: 1 },
  "ease-out": { p1x: 0, p1y: 0, p2x: 0.58, p2y: 1 },
  "ease-in-out": { p1x: 0.42, p1y: 0, p2x: 0.58, p2y: 1 },
  linear: { p1x: 0, p1y: 0, p2x: 1, p2y: 1 },
};
export default function Content() {
  const [preset, setPreset] = useState(easingPresets[0]);
  const [form, setForm] = useState({
    p1x: 0.4,
    p1y: 0,
    p2x: 0.2,
    p2y: 1,
  });
  const applyPreset = (name: string) => {
    setPreset(name);
    if (name !== "Custom" && presetValues[name]) {
      setForm(presetValues[name]);
    }
  };
  const value = `cubic-bezier(${form.p1x}, ${form.p1y}, ${form.p2x}, ${form.p2y})`;
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "CSS", link: "/css-generator" },
            {
              name: "Cubic Bezier",
              link: "/css-generator/cubic-bezier",
            },
          ]}
        />
        <Title title="Cubic Bezier Generator" />
        <Description description="Build a cubic-bezier easing curve for transitions and animations. Drag the control points or pick a preset, then copy the timing function." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Curve">
            <Select
              name="preset"
              title="Preset"
              data={easingPresets}
              value={preset}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                applyPreset(event.target.value)
              }
            />
            <Range
              name="p1x"
              title="Control point 1 — X"
              min={0}
              max={1}
              step={0.01}
              unit=""
              value={form.p1x}
              onChange={(p1x) => {
                setPreset("Custom");
                setForm({ ...form, p1x });
              }}
            />
            <Range
              name="p1y"
              title="Control point 1 — Y"
              min={-0.5}
              max={1.5}
              step={0.01}
              unit=""
              value={form.p1y}
              onChange={(p1y) => {
                setPreset("Custom");
                setForm({ ...form, p1y });
              }}
            />
            <Range
              name="p2x"
              title="Control point 2 — X"
              min={0}
              max={1}
              step={0.01}
              unit=""
              value={form.p2x}
              onChange={(p2x) => {
                setPreset("Custom");
                setForm({ ...form, p2x });
              }}
            />
            <Range
              name="p2y"
              title="Control point 2 — Y"
              min={-0.5}
              max={1.5}
              step={0.01}
              unit=""
              value={form.p2y}
              onChange={(p2y) => {
                setPreset("Custom");
                setForm({ ...form, p2y });
              }}
            />
          </Section>
        </div>
      </div>
      <Output>
        <CssPreview>
          <BezierPreview
            p1x={form.p1x}
            p1y={form.p1y}
            p2x={form.p2x}
            p2y={form.p2y}
          />
        </CssPreview>
        <Code
          title="Code"
          formats={[
            ...buildCssFormats("transition-timing-function", value),
            {
              id: "animation",
              label: "Animation",
              lang: "css",
              code: `animation-timing-function: ${value};`,
              note: "Use the same curve for CSS animations.",
            },
          ]}
        />
      </Output>
    </>
  );
}
