"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Select from "../../components/select";
import Code from "../../components/code";
import Output from "../../components/output";
import JsonLdPreview from "../../components/jsonld-preview";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Section from "../../components/section";
import eventStatus from "../../json/eventStatus.json";
import eventAttendanceMode from "../../json/eventAttendanceMode.json";
import { buildEvent } from "../../lib/jsonld";
import { buildJsonLdFormats } from "../../lib/jsonld-formats";
export default function Content() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    startDate: "",
    endDate: "",
    locationName: "",
    locationAddress: "",
    eventStatus: eventStatus[0],
    attendanceMode: eventAttendanceMode[0],
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = buildEvent(form);
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "JSON-LD", link: "/json-ld-generator" },
            { name: "Event", link: "/json-ld-generator/event" },
          ]}
        />
        <Title title="Event Schema Generator" />
        <Description description="Generate Event structured data with dates, location, and attendance mode. Helps search engines show event rich results in search." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Event">
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
              name="startDate"
              title="Start Date"
              value={form.startDate}
              onChange={handleChange}
              info="ISO 8601 datetime, e.g. <b>2026-09-01T18:00:00+00:00</b>."
            />
            <Input
              name="endDate"
              title="End Date"
              value={form.endDate}
              onChange={handleChange}
            />
            <Input
              name="locationName"
              title="Location Name"
              value={form.locationName}
              onChange={handleChange}
            />
            <Input
              name="locationAddress"
              title="Location Address"
              value={form.locationAddress}
              onChange={handleChange}
            />
            <Select
              name="eventStatus"
              title="Event Status"
              data={eventStatus}
              value={form.eventStatus}
              onChange={handleChange}
            />
            <Select
              name="attendanceMode"
              title="Attendance Mode"
              data={eventAttendanceMode}
              value={form.attendanceMode}
              onChange={handleChange}
            />
          </Section>
        </div>
      </div>
      <Output>
        <JsonLdPreview
          variant="event"
          name={form.name}
          description={form.description}
          startDate={form.startDate}
          locationName={form.locationName}
        />
        <Code title="Code" formats={buildJsonLdFormats(data)} />
      </Output>
    </>
  );
}
