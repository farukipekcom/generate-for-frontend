"use client";
import React, { useState } from "react";
import Range from "../../components/range";
import ColorInput from "../../components/color-input";
import Checkbox from "../../components/checkbox";
import Code from "../../components/code";
import Output from "../../components/output";
import CssPreview from "../../components/css-preview";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Section from "../../components/section";
import {
  buildCssFormats,
  hexToRgba,
  tailwindArbitrary,
} from "../../lib/css-formats";
export default function Content() {
  const [form, setForm] = useState({
    offsetX: 0,
    offsetY: 12,
    blur: 24,
    spread: 0,
    color: "#000000",
    opacity: 25,
    inset: false,
  });
  const rgba = hexToRgba(form.color, form.opacity / 100);
  const value = `${form.inset ? "inset " : ""}${form.offsetX}px ${form.offsetY}px ${form.blur}px ${form.spread}px ${rgba}`;
  const tailwind = `shadow-[${tailwindArbitrary(value)}]`;
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "CSS", link: "/css-generator" },
            { name: "Box Shadow", link: "/css-generator/box-shadow" },
          ]}
        />
        <Title title="Box Shadow Generator" />
        <Description description="Build a box-shadow declaration with live preview. Adjust offset, blur, spread, color, and inset." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Shadow">
            <Range
              name="offsetX"
              title="Offset X"
              min={-50}
              max={50}
              value={form.offsetX}
              onChange={(offsetX) => setForm({ ...form, offsetX })}
            />
            <Range
              name="offsetY"
              title="Offset Y"
              min={-50}
              max={50}
              value={form.offsetY}
              onChange={(offsetY) => setForm({ ...form, offsetY })}
            />
            <Range
              name="blur"
              title="Blur"
              min={0}
              max={100}
              value={form.blur}
              onChange={(blur) => setForm({ ...form, blur })}
            />
            <Range
              name="spread"
              title="Spread"
              min={-50}
              max={50}
              value={form.spread}
              onChange={(spread) => setForm({ ...form, spread })}
            />
            <ColorInput
              name="color"
              title="Color"
              value={form.color}
              onChange={(color) => setForm({ ...form, color })}
            />
            <Range
              name="opacity"
              title="Opacity"
              min={0}
              max={100}
              unit="%"
              value={form.opacity}
              onChange={(opacity) => setForm({ ...form, opacity })}
            />
            <Checkbox
              name="inset"
              title="Inset shadow"
              checked={form.inset}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, inset: event.target.checked })
              }
            />
          </Section>
        </div>
      </div>
      <Output>
        <CssPreview>
          <div
            className="h-32 w-32 rounded-normal bg-white dark:bg-dark_input_bg"
            style={{ boxShadow: value }}
          />
        </CssPreview>
        <Code
          title="Code"
          formats={buildCssFormats("box-shadow", value, tailwind)}
        />
      </Output>
    </>
  );
}
