const sharedFetch = () => {
  const fetchData = async (endpoint, method, body) => {
    try {
      const res = await fetch(import.meta.env.VITE_SERVER + endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data?.msg) {
          if (Array.isArray(data.msg)) {
            throw new Error(data.msg.join("\n"));
          } else {
            console.error("data.msg", data.msg);
            throw new Error(data.msg);
          }
        } else {
          console.error("final", data);
          throw new Error(
            "An unknown error has occurred, please try again later",
          );
        }
      }

      return data;
    } catch (error) {
      throw error;
    }
  };

  return fetchData;
};

export default sharedFetch;
