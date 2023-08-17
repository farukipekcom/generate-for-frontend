interface Props {
  title: string;
  data: string[];
}
export default function Select(Props: Props) {
  const { title, data } = Props;
  return (
    <div className="selectWrapper relative">
      <label
        htmlFor="select"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <select
        id="select"
        className="customInput block h-10 w-full appearance-none"
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
