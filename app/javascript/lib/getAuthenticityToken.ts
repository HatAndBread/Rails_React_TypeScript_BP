export const getAuthenticityToken = (): string => {
  return (
    Array.from(document.getElementsByTagName("meta")).find(
      (m) => m.name === "csrf-token"
    )?.content || "no-csrf-token"
  );
};
