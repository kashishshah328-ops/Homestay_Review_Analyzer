export default function Input({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
    />
  );
}