import React from "react";

const AuthenticityToken = () => {
  const t = Array.from(document.getElementsByTagName("meta")).find(
    (m) => m.name === "csrf-token"
  ).content;
  return <input type='hidden' name='authenticity_token' value={t} />;
};

export default AuthenticityToken;
