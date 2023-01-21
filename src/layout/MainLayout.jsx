import React from "react";

export function MainLayout(props) {
  return (
    <div className="authLayout">
      <div className="login-wrapper">{props.children}</div>
    </div>
  );
}

// export default AuthLayout;
