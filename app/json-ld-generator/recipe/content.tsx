"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Code from "../../components/code";
import Output from "../../components/output";
import JsonLdPreview from "../../components/jsonld-preview";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Section from "../../components/section";
import { buildRecipe } from "../../lib/jsonld";
import { buildJsonLdFormats } from "../../lib/jsonld-formats";
export default function Content() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    prepTime: "",
    cookTime: "",
    recipeYield: "",
    ingredients: "",
    instructions: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = buildRecipe(form);
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "JSON-LD", link: "/json-ld-generator" },
            { name: "Recipe", link: "/json-ld-generator/recipe" },
          ]}
        />
        <Title title="Recipe Schema Generator" />
        <Description description="Generate Recipe structured data with ingredients, instructions, prep time, and yield. Helps search engines show recipe rich results." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Recipe">
            <Input
              name="name"
              title="Name"
              value={form.name}
              onChange={handleChange}
            />
            <Textarea
              name="description"
              title="Description"
              value={form.description}
              onChange={handleChange}
            />
            <Input
              name="image"
              title="Image URL"
              value={form.image}
              onChange={handleChange}
            />
            <Input
              name="prepTime"
              title="Prep Time"
              value={form.prepTime}
              onChange={handleChange}
              info="ISO 8601 duration, e.g. <b>PT15M</b> for 15 minutes."
            />
            <Input
              name="cookTime"
              title="Cook Time"
              value={form.cookTime}
              onChange={handleChange}
              info="ISO 8601 duration, e.g. <b>PT45M</b> for 45 minutes."
            />
            <Input
              name="recipeYield"
              title="Yield"
              value={form.recipeYield}
              onChange={handleChange}
              info="Number of servings, e.g. <b>4</b>."
            />
            <Textarea
              name="ingredients"
              title="Ingredients"
              value={form.ingredients}
              onChange={handleChange}
              info="One ingredient per line."
            />
            <Textarea
              name="instructions"
              title="Instructions"
              value={form.instructions}
              onChange={handleChange}
              info="One step per line."
            />
          </Section>
        </div>
      </div>
      <Output>
        <JsonLdPreview
          variant="recipe"
          name={form.name}
          description={form.description}
          prepTime={form.prepTime}
          cookTime={form.cookTime}
          recipeYield={form.recipeYield}
        />
        <Code title="Code" formats={buildJsonLdFormats(data)} />
      </Output>
    </>
  );
}
