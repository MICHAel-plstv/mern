import { useState, useCallback, useEffect } from "react";
const storageName = "MICHA";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwToken, id) => {
    setToken(jwToken);
    setUserId(id);

    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: id, token: jwToken })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);

    localStorage.clear(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.userId);
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, userId, ready };
};
