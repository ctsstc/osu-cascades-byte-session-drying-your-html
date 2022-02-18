const myName = "Cody Swartz";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} {myName}
      </p>
    </footer>
  );
};

export default Footer;
