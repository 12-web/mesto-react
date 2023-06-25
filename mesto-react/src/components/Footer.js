import React, { useState, useEffect } from "react";

function Footer() {
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    const date = new Date();
    const currenYear = date.getFullYear();
    setCurrentYear(currenYear);
  }, []);

  return (
    <footer className="footer">
      <p className="footer__copyright">© {currentYear} Mesto Russia</p>
    </footer>
  );
}

export default Footer;
