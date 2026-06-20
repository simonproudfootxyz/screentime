const TMDB_BASE_URL = "https://api.themoviedb.org/3";

type RequestOptions = {
  query?: Record<string, string | number | boolean | undefined>;
  nextRevalidateSeconds?: number;
};

function getApiKey(): string {
  const key = process.env.TMDB_API_KEY;
  if (!key) {
    throw new Error("TMDB_API_KEY is missing.");
  }
  return key;
}

export async function tmdbGet<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const apiKey = getApiKey();
  const params = new URLSearchParams({ api_key: apiKey });

  for (const [key, value] of Object.entries(options.query ?? {})) {
    if (value !== undefined) {
      params.set(key, String(value));
    }
  }

  const url = `${TMDB_BASE_URL}${path}?${params.toString()}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    next: options.nextRevalidateSeconds ? { revalidate: options.nextRevalidateSeconds } : undefined,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`TMDB request failed (${response.status}): ${text}`);
  }

  return (await response.json()) as T;
}
