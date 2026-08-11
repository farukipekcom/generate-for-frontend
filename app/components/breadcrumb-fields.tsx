import React from "react";
import Input from "./input";
export interface BreadcrumbItem {
  name: string;
  url: string;
}
interface Props {
  items: BreadcrumbItem[];
  onChange: (items: BreadcrumbItem[]) => void;
}
export default function BreadcrumbFields(Props: Props) {
  const { items, onChange } = Props;
  const update = (index: number, field: keyof BreadcrumbItem, value: string) => {
    onChange(
      items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    );
  };
  return (
    <div className="flex flex-col gap-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-y-4 rounded-small border border-borderLight p-4 dark:border-border"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-primary dark:text-white">
              Item {index + 1}
            </span>
            {items.length > 1 && (
              <button
                type="button"
                className="text-sm font-semibold text-grayLight hover:text-primary dark:hover:text-white"
                onClick={() =>
                  onChange(items.filter((_, i) => i !== index))
                }
              >
                Remove
              </button>
            )}
          </div>
          <Input
            name={`crumb-name-${index}`}
            title="Name"
            value={item.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              update(index, "name", event.target.value)
            }
          />
          <Input
            name={`crumb-url-${index}`}
            title="URL"
            value={item.url}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              update(index, "url", event.target.value)
            }
          />
        </div>
      ))}
      <button
        type="button"
        className="h-10 rounded-small bg-secondary text-sm font-semibold text-white"
        onClick={() => onChange([...items, { name: "", url: "" }])}
      >
        Add item
      </button>
    </div>
  );
}
