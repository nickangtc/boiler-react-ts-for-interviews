// import styles from "./Input.module.css";

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
}

// this is a totally contrived, needless component just as skeleton
function Input({ id, name, type, placeholder, defaultValue }: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}

export default Input;
