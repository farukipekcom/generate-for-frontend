import Label from "./label";

interface Props {
  title: string;
  data: string[];
  onChange: any;
  name: string;
}
export default function Select(Props: Props) {
  const { title, data, onChange, name } = Props;
  return (
    <div className="selectWrapper relative">
      <Label name={name} title={title} />
      <select
        className="customInput block h-10 w-full appearance-none"
        onChange={onChange}
        name={name}
        id={name}
        defaultValue="2"
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
