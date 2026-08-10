import Label from "./label";

interface Props {
  title: string;
  data: string[];
  value: string;
  onChange: any;
  name: string;
}
export default function Select(Props: Props) {
  const { title, data, value, onChange, name } = Props;
  return (
    <div className="selectWrapper relative">
      <Label name={name} title={title} />
      <select
        className="customInput block h-10 w-full appearance-none"
        value={value}
        onChange={onChange}
        name={name}
        id={name}
      >
        {data.map((item, id) => {
          return (
            <option key={id} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
