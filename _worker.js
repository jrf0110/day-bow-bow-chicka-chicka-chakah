export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/version") {
      return new Response(
        JSON.stringify({
          version: "DAY-BOW-BOW-1",
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    if (url.pathname === "/api/version2") {
      return new Response(
        JSON.stringify({
          version: "DAY-BOW-BOW-2",
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    return env.ASSETS.fetch(request);
  },
};
