import React from "react";
import { getAuthenticityToken } from "../../../lib/getAuthenticityToken";

const AuthenticityToken = () => {
  const t = getAuthenticityToken();
  return <input type='hidden' name='authenticity_token' value={t} />;
};

export default AuthenticityToken;
