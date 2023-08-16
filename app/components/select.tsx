interface Props {
  title: string;
  data: string[];
}
export default function Select(Props: Props) {
  const { title, data } = Props;
  return (
    <div className="denemewrapper relative">
      <label
        htmlFor="countries"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <select
        id="countries"
        className="dark:border-inputDarkBorder block h-10 w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white py-2 pl-3 text-sm text-gray-900 outline-none focus:border-primary dark:bg-primary dark:text-white dark:placeholder-gray-400 dark:focus:border-secondary "
      >
        {data.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
