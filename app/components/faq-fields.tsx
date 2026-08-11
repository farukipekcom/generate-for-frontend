import React from "react";
import Input from "./input";
import Textarea from "./textarea";
export interface FaqItem {
  question: string;
  answer: string;
}
interface Props {
  items: FaqItem[];
  onChange: (items: FaqItem[]) => void;
}
export default function FaqFields(Props: Props) {
  const { items, onChange } = Props;
  const update = (index: number, field: keyof FaqItem, value: string) => {
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
              Question {index + 1}
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
            name={`question-${index}`}
            title="Question"
            value={item.question}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              update(index, "question", event.target.value)
            }
          />
          <Textarea
            name={`answer-${index}`}
            title="Answer"
            value={item.answer}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              update(index, "answer", event.target.value)
            }
          />
        </div>
      ))}
      <button
        type="button"
        className="h-10 rounded-small bg-secondary text-sm font-semibold text-white"
        onClick={() => onChange([...items, { question: "", answer: "" }])}
      >
        Add question
      </button>
    </div>
  );
}
