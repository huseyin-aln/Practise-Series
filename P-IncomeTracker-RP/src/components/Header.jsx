import React from "react";

const Header = ({ totalIncome }) => {
  return (
    <header>
      <h1>Income Tracker</h1>
      <div className="total-income">
        <h2>Total Income : {totalIncome} $</h2>
      </div>
    </header>
  );
};

export default Header;
