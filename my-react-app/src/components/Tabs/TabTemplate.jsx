export default function TabTemplate(props) {
  const { data, setData, tabData, error } = props;
  const { tabName, fields } = tabData;
  const handleChange = function (e) {
    const { name, value, checked, type } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <>
      <div>
        <h1>{tabName}</h1>
        {fields.length > 0 &&
          fields.map((field, idx) => (
            <div key={idx}>
              <label>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
                value={
                  field.type !== "checkbox" ? data[field.name] || "" : undefined
                }
                checked={
                  field.type === "checkbox"
                    ? data[field.name] || ""
                    : field.type === "radio"
                    ? data[field.name] === field.value
                    : undefined
                }
                {...(field.type === "radio" && { value: field.value })}
              />
              {error[field.name] && <p>{error[field.name]}</p>}
            </div>
          ))}
      </div>
    </>
  );
}
