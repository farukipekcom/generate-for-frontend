interface Props {
  title: string;
  data: string[];
  onChange: any;
  name: string;
  id: string;
}
export default function Select(Props: Props) {
  const { title, data, onChange, name, id } = Props;
  return (
    <div className="selectWrapper relative">
      <label
        htmlFor="select"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <select
        className="customInput block h-10 w-full appearance-none"
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
