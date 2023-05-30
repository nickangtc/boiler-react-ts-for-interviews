import styles from "./App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import Input from "./components/Input";

const client = axios.create({
  baseURL: "https://dummyjson.com/products",
});

function App() {
  const [productIdInput, setProductIdInput] = useState("1");
  const [apiData, setApiData] = useState<{} | null>(null);
  const [errors, setErrors] = useState<{} | null>(null);

  useEffect(() => {
    client
      .get(productIdInput)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          setErrors(err);
        } else {
          console.log("unexpected error!", err);
        }
      });
  }, [productIdInput]);

  function handleSubmit(ev) {
    ev.preventDefault();

    const { productId } = ev.target.elements;

    setProductIdInput(productId.value);
  }

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
      </header>

      <section>
        <p>Errors:</p>
        <p className={styles.Errors}>{JSON.stringify(errors)}</p>
        <p>API output:</p>
        <code className={styles.Code}>{JSON.stringify(apiData)}</code>
      </section>

      <section>
        <form onSubmit={handleSubmit}>
          <label>Search by product ID:</label>
          <Input
            name="productId"
            type="text"
            placeholder="Product ID"
            defaultValue={productIdInput}
          ></Input>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
