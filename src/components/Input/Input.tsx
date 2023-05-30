// import styles from "./Input.module.css";

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
}

// this is a totally contrived, needless component just as skeleton
function Input({ name, type, placeholder, defaultValue }: InputProps) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}

export default Input;
