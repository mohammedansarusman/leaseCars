export const InputField = ({ label, type, placeholder, value, name, id, onChange, message, onBlur }) => {
  
  return (
    <div className="grid grid-cols-1 text-base font-light gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        id={id}
        message={message}
        className="outline-1 outline-gray-300 pl-4 text-sm py-2 rounded-sm 
              focus:outline-1 focus:outline-sky-800"
        placeholder={placeholder}
      />
      <div className="w-full h-[25px] text-red-500 text-xs">
        <p>{message}</p>
      </div>
    </div>
  );
};
