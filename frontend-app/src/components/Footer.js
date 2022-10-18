const Footer = () => {
  return (
    <>
      <br></br>
      <footer
       className="container-fluid text-center"
        style={{
            position: "fixed",
            bottom: "0",
            width: "100%",
            marginTop: "0px",
            color: "#fff",
            backgroundColor: "#1b1b1b",
            padding: "15px",
            height: "50px",
        }}
      >
        <p>Global News - An example application developed using News API</p>
      </footer>
    </>
  );
};

export default Footer;