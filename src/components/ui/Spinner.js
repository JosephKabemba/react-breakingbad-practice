import logo from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={logo}
      alt="loading..."
      style={{
        display: "block",
        margin: "auto",
        width: "200px",
      }}
    />
  );
};

export default Spinner;
