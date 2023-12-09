export function handler(req: Request): Response {
  const url = new URL(req.url);
  const { pathname } = url;

  return new Response("", {
    status: 307,
    headers: { Location: `${pathname}/s1` },
  });
}
