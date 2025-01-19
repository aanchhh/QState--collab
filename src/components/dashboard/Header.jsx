import React from "react";

const Header = ({ name, children, level = 1, className = "" }) => {
  // Dynamically render the Header level
  const HeaderTag = `h${level}`;

  return (
    <HeaderTag className={`text-2xl text-slate-100 ${className}`}>
      {/* {name ? name : children} */}
      {children} {name ? name : ""}
    </HeaderTag>
  );
};

export default Header;

// USE CASE EXAMPLES
// {/* Default heading (h1) with children */}
// <Header>Welcome to My App</Header>

// {/* Header with a specific level */}
// <Header level={2}>This is an H2 Header</Header>

// {/* Header with a name prop */}
// <Header name="John Doe">Welcome, </Header>

// {/* Header with custom styles */}
// <Header level={3} className="text-pink-500">
//   Styled Header
// </Header>
