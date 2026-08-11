"use client";
import React, { useState } from "react";
import Range from "../../components/range";
import ColorInput from "../../components/color-input";
import Select from "../../components/select";
import Code from "../../components/code";
import Output from "../../components/output";
import CssPreview from "../../components/css-preview";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Section from "../../components/section";
import gradientTypes from "../../json/gradientTypes.json";
import { buildCssFormats, tailwindArbitrary } from "../../lib/css-formats";
export default function Content() {
  const [form, setForm] = useState({
    type: gradientTypes[0],
    angle: 135,
    color1: "#667eea",
    stop1: 0,
    color2: "#764ba2",
    stop2: 100,
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const value =
    form.type === "radial-gradient"
      ? `radial-gradient(circle, ${form.color1} ${form.stop1}%, ${form.color2} ${form.stop2}%)`
      : `linear-gradient(${form.angle}deg, ${form.color1} ${form.stop1}%, ${form.color2} ${form.stop2}%)`;
  const tailwind = `bg-[${tailwindArbitrary(value)}]`;
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "CSS", link: "/css-generator" },
            { name: "Gradient", link: "/css-generator/gradient" },
          ]}
        />
        <Title title="Gradient Generator" />
        <Description description="Build linear or radial gradient backgrounds with two color stops and a live preview." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Gradient">
            <Select
              name="type"
              title="Type"
              data={gradientTypes}
              value={form.type}
              onChange={handleChange}
            />
            {form.type === "linear-gradient" && (
              <Range
                name="angle"
                title="Angle"
                min={0}
                max={360}
                unit="°"
                value={form.angle}
                onChange={(angle) => setForm({ ...form, angle })}
              />
            )}
            <ColorInput
              name="color1"
              title="Color 1"
              value={form.color1}
              onChange={(color1) => setForm({ ...form, color1 })}
            />
            <Range
              name="stop1"
              title="Stop 1"
              min={0}
              max={100}
              unit="%"
              value={form.stop1}
              onChange={(stop1) => setForm({ ...form, stop1 })}
            />
            <ColorInput
              name="color2"
              title="Color 2"
              value={form.color2}
              onChange={(color2) => setForm({ ...form, color2 })}
            />
            <Range
              name="stop2"
              title="Stop 2"
              min={0}
              max={100}
              unit="%"
              value={form.stop2}
              onChange={(stop2) => setForm({ ...form, stop2 })}
            />
          </Section>
        </div>
      </div>
      <Output>
        <CssPreview>
          <div
            className="h-40 w-full max-w-sm rounded-normal"
            style={{ background: value }}
          />
        </CssPreview>
        <Code
          title="Code"
          formats={buildCssFormats("background", value, tailwind)}
        />
      </Output>
    </>
  );
}
