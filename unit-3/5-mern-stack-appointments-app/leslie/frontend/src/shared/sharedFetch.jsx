const sharedFetch = () => {
  const fetchData = async (endpoint, method, body, token) => {
    try {
      const res = await fetch(import.meta.env.VITE_SERVER + endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data?.message) {
          if (Array.isArray(data.message)) {
            console.error("Array(data.message)", data.message[0].msg);
            return { ok: false, message: data.message[0].msg };
          } else {
            console.error("data.message", data.message);
            return { ok: false, message: data.message };
          }
        } else {
          console.error("final", data);
          return {
            ok: false,
            message: "an unknown error has occurred, please try again later",
          };
        }
      }

      return { ok: true, data: data };
    } catch (error) {
      console.error(error.message);
      return { ok: false, message: "data error" };
    }
  };

  return fetchData;
};

export default sharedFetch;
