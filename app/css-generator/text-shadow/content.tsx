"use client";
import React, { useState } from "react";
import Range from "../../components/range";
import ColorInput from "../../components/color-input";
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
    offsetY: 2,
    blur: 4,
    color: "#000000",
    opacity: 35,
  });
  const rgba = hexToRgba(form.color, form.opacity / 100);
  const value = `${form.offsetX}px ${form.offsetY}px ${form.blur}px ${rgba}`;
  const tailwind = `[text-shadow:${tailwindArbitrary(value)}]`;
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "CSS", link: "/css-generator" },
            { name: "Text Shadow", link: "/css-generator/text-shadow" },
          ]}
        />
        <Title title="Text Shadow Generator" />
        <Description description="Build a text-shadow declaration with live preview. Adjust offset, blur, and color to style headings and display text." />
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
          </Section>
        </div>
      </div>
      <Output>
        <CssPreview>
          <p
            className="text-4xl font-bold text-primary dark:text-white"
            style={{ textShadow: value }}
          >
            Preview Text
          </p>
        </CssPreview>
        <Code
          title="Code"
          formats={buildCssFormats("text-shadow", value, tailwind)}
        />
      </Output>
    </>
  );
}
