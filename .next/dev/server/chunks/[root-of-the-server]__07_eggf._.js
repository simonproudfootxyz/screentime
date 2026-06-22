module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Projects/screentime/src/lib/schemas/game-api.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "guessRequestSchema",
    ()=>guessRequestSchema,
    "nextRoundRequestSchema",
    ()=>nextRoundRequestSchema,
    "sessionStateSchema",
    ()=>sessionStateSchema,
    "skipRequestSchema",
    ()=>skipRequestSchema,
    "startGameRequestSchema",
    ()=>startGameRequestSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Projects/screentime/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const gameModeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("classic")
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("genre"),
        genreId: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("year"),
        year: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1888)
    })
]);
const movieClueSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
});
const answerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    movieId: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    originalTitle: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    releaseDate: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const roundSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    roundId: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    clues: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(movieClueSchema),
    answer: answerSchema,
    guesses: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    solved: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    skipped: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
const sessionStateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    mode: gameModeSchema,
    status: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "idle",
        "inRound",
        "gameOver",
        "complete"
    ]),
    skipsRemaining: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
    seenMovieIds: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive()),
    rounds: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(roundSchema),
    currentRound: roundSchema.nullable(),
    totalCorrect: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const startGameRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    mode: gameModeSchema.default({
        type: "classic"
    })
});
const nextRoundRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    session: sessionStateSchema
});
const guessRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    session: sessionStateSchema,
    guess: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const skipRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    session: sessionStateSchema
});
}),
"[project]/Projects/screentime/src/config/game.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GAME_CONFIG",
    ()=>GAME_CONFIG,
    "STORAGE_KEYS",
    ()=>STORAGE_KEYS
]);
const GAME_CONFIG = {
    initialSkips: 10,
    maxCharacterClues: 9,
    maxGuessesPerMovie: 5,
    minRating: 4,
    minVoteCount: 100,
    language: "en-US",
    minGuessLengthForSubstring: 4,
    minGuessTokensForSubstring: 2,
    tmdbDiscoverSort: "popularity.desc",
    maxDiscoverPages: 20
};
const STORAGE_KEYS = {
    sessionPrefix: "movie-guessing-game.session.v1"
};
}),
"[project]/Projects/screentime/src/lib/answer-normalization.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeAnswer",
    ()=>normalizeAnswer,
    "tokenizeAnswer",
    ()=>tokenizeAnswer
]);
function normalizeAnswer(raw) {
    return raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}
function tokenizeAnswer(raw) {
    const normalized = normalizeAnswer(raw);
    if (!normalized) {
        return [];
    }
    return normalized.split(" ");
}
}),
"[project]/Projects/screentime/src/lib/answer-matcher.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isGuessCorrect",
    ()=>isGuessCorrect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/config/game.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$lib$2f$answer$2d$normalization$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/lib/answer-normalization.ts [app-route] (ecmascript)");
;
;
function compact(normalized) {
    return normalized.replace(/\s+/g, "");
}
function isGuessCorrect(guess, title, originalTitle) {
    const normalizedGuess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$lib$2f$answer$2d$normalization$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeAnswer"])(guess);
    if (!normalizedGuess) {
        return {
            ok: true,
            isCorrect: false,
            normalizedGuess,
            reason: "empty_guess"
        };
    }
    const candidates = [
        title,
        originalTitle
    ].map(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$lib$2f$answer$2d$normalization$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeAnswer"]).filter(Boolean);
    const compactGuess = compact(normalizedGuess);
    if (candidates.some((candidate)=>candidate === normalizedGuess || compact(candidate) === compactGuess)) {
        return {
            ok: true,
            isCorrect: true,
            normalizedGuess
        };
    }
    const allowSubstring = normalizedGuess.length >= __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GAME_CONFIG"].minGuessLengthForSubstring;
    if (allowSubstring && candidates.some((candidate)=>candidate.includes(normalizedGuess) || compact(candidate).includes(compactGuess))) {
        return {
            ok: true,
            isCorrect: true,
            normalizedGuess
        };
    }
    return {
        ok: true,
        isCorrect: false,
        normalizedGuess,
        reason: "no_match"
    };
}
}),
"[project]/Projects/screentime/src/server/tmdb/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tmdbGet",
    ()=>tmdbGet
]);
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
function getApiKey() {
    const key = process.env.TMDB_API_KEY;
    if (!key) {
        throw new Error("TMDB_API_KEY is missing.");
    }
    return key;
}
async function tmdbGet(path, options = {}) {
    const apiKey = getApiKey();
    const params = new URLSearchParams({
        api_key: apiKey
    });
    for (const [key, value] of Object.entries(options.query ?? {})){
        if (value !== undefined) {
            params.set(key, String(value));
        }
    }
    const url = `${TMDB_BASE_URL}${path}?${params.toString()}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json"
        },
        next: options.nextRevalidateSeconds ? {
            revalidate: options.nextRevalidateSeconds
        } : undefined
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`TMDB request failed (${response.status}): ${text}`);
    }
    return await response.json();
}
}),
"[project]/Projects/screentime/src/server/tmdb/build-discover-query.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildDiscoverQuery",
    ()=>buildDiscoverQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/config/game.ts [app-route] (ecmascript)");
;
function buildDiscoverQuery(mode, page) {
    const query = {
        include_adult: false,
        include_video: false,
        language: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GAME_CONFIG"].language,
        sort_by: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GAME_CONFIG"].tmdbDiscoverSort,
        "vote_average.gte": __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GAME_CONFIG"].minRating,
        "vote_count.gte": __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GAME_CONFIG"].minVoteCount,
        page
    };
    if (mode.type === "genre") {
        query.with_genres = mode.genreId;
    }
    if (mode.type === "year") {
        query.primary_release_year = mode.year;
    }
    return query;
}
}),
"[project]/Projects/screentime/src/server/tmdb/discover.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "discoverMovies",
    ()=>discoverMovies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/server/tmdb/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$build$2d$discover$2d$query$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/server/tmdb/build-discover-query.ts [app-route] (ecmascript)");
;
;
async function discoverMovies(mode, page) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tmdbGet"])("/discover/movie", {
        query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$build$2d$discover$2d$query$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildDiscoverQuery"])(mode, page),
        nextRevalidateSeconds: 60
    });
}
}),
"[project]/Projects/screentime/src/server/tmdb/character-clues.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractCharacterClues",
    ()=>extractCharacterClues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/config/game.ts [app-route] (ecmascript)");
;
function normalizeCharacterName(value) {
    return value.replace(/\s+/g, " ").trim();
}
function isUsableCharacterName(value) {
    const normalized = normalizeCharacterName(value);
    if (!normalized) {
        return false;
    }
    if (normalized.toLowerCase() === "self") {
        return false;
    }
    return normalized.length >= 2;
}
function extractCharacterClues(credits, max = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GAME_CONFIG"].maxCharacterClues) {
    const byOrder = [
        ...credits.cast
    ].sort((a, b)=>(a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));
    const names = byOrder.map((member)=>member.character ?? "").map(normalizeCharacterName).filter(isUsableCharacterName);
    const deduped = Array.from(new Set(names));
    return deduped.slice(0, max);
}
}),
"[project]/Projects/screentime/src/server/tmdb/movie-details.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMovieCredits",
    ()=>getMovieCredits,
    "getMovieDetails",
    ()=>getMovieDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/config/game.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/server/tmdb/client.ts [app-route] (ecmascript)");
;
;
async function getMovieDetails(movieId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tmdbGet"])(`/movie/${movieId}`, {
        query: {
            language: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GAME_CONFIG"].language
        },
        nextRevalidateSeconds: 300
    });
}
async function getMovieCredits(movieId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tmdbGet"])(`/movie/${movieId}/credits`, {
        query: {
            language: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GAME_CONFIG"].language
        },
        nextRevalidateSeconds: 300
    });
}
}),
"[project]/Projects/screentime/src/server/logging/game-logger.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gameLogger",
    ()=>gameLogger
]);
function format(message, payload) {
    if (!payload) {
        return message;
    }
    return `${message} ${JSON.stringify(payload)}`;
}
const gameLogger = {
    info (message, payload) {
        console.info(format(message, payload));
    },
    warn (message, payload) {
        console.warn(format(message, payload));
    },
    error (message, payload) {
        console.error(format(message, payload));
    }
};
}),
"[project]/Projects/screentime/src/server/game/game-errors.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExhaustedMoviePoolError",
    ()=>ExhaustedMoviePoolError,
    "InvalidSessionStateError",
    ()=>InvalidSessionStateError
]);
class ExhaustedMoviePoolError extends Error {
    constructor(){
        super("No valid unseen movies remain for this session and mode.");
        this.name = "ExhaustedMoviePoolError";
    }
}
class InvalidSessionStateError extends Error {
    constructor(message){
        super(message);
        this.name = "InvalidSessionStateError";
    }
}
}),
"[project]/Projects/screentime/src/server/game/select-next-round.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectNextRound",
    ()=>selectNextRound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/config/game.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$discover$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/server/tmdb/discover.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$character$2d$clues$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/server/tmdb/character-clues.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$movie$2d$details$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/server/tmdb/movie-details.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$logging$2f$game$2d$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/server/logging/game-logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$game$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/server/game/game-errors.ts [app-route] (ecmascript)");
;
;
;
;
;
;
function shuffle(items) {
    const output = [
        ...items
    ];
    for(let i = output.length - 1; i > 0; i -= 1){
        const j = Math.floor(Math.random() * (i + 1));
        [output[i], output[j]] = [
            output[j],
            output[i]
        ];
    }
    return output;
}
function buildRandomPageOrder(totalPages) {
    const maxPages = Math.max(1, Math.min(totalPages, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GAME_CONFIG"].maxDiscoverPages));
    return shuffle(Array.from({
        length: maxPages
    }, (_, index)=>index + 1));
}
function createRoundId(movieId) {
    return `${movieId}-${Date.now()}`;
}
async function selectNextRound(args) {
    const seen = new Set(args.seenMovieIds);
    const firstPage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$discover$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["discoverMovies"])(args.mode, 1);
    const discoverByPage = new Map([
        [
            1,
            firstPage
        ]
    ]);
    const pagesToCheck = buildRandomPageOrder(firstPage.total_pages);
    for (const page of pagesToCheck){
        const discover = discoverByPage.get(page) ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$discover$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["discoverMovies"])(args.mode, page);
        if (!discover.results.length) {
            continue;
        }
        for (const movie of shuffle(discover.results)){
            if (seen.has(movie.id)) {
                continue;
            }
            try {
                const [details, credits] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$movie$2d$details$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMovieDetails"])(movie.id),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$movie$2d$details$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMovieCredits"])(movie.id)
                ]);
                const clues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$tmdb$2f$character$2d$clues$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractCharacterClues"])(credits);
                if (clues.length === 0) {
                    continue;
                }
                const round = {
                    roundId: createRoundId(movie.id),
                    clues: clues.map((name)=>({
                            name
                        })),
                    answer: {
                        movieId: details.id,
                        title: details.title,
                        originalTitle: details.original_title,
                        description: details.overview,
                        releaseDate: details.release_date
                    },
                    guesses: [],
                    solved: false,
                    skipped: false
                };
                return {
                    ok: true,
                    exhausted: false,
                    round
                };
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$logging$2f$game$2d$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gameLogger"].warn("Failed to create round candidate", {
                    movieId: movie.id,
                    error: error instanceof Error ? error.message : String(error)
                });
            }
        }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$game$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExhaustedMoviePoolError"]();
}
}),
"[project]/Projects/screentime/src/server/game/session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "advanceToNextRound",
    ()=>advanceToNextRound,
    "applyGuess",
    ()=>applyGuess,
    "applySkip",
    ()=>applySkip,
    "createNewSession",
    ()=>createNewSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/config/game.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$lib$2f$answer$2d$matcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/lib/answer-matcher.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$select$2d$next$2d$round$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/server/game/select-next-round.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$game$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/server/game/game-errors.ts [app-route] (ecmascript)");
;
;
;
;
function nowIso() {
    return new Date().toISOString();
}
function ensureCurrentRound(session) {
    if (!session.currentRound) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$game$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidSessionStateError"]("No active round.");
    }
    return session.currentRound;
}
function applySkipForRound(session, round) {
    const nextSkipsRemaining = session.skipsRemaining - 1;
    const skippedRound = {
        ...round,
        skipped: true
    };
    return {
        ...session,
        skipsRemaining: Math.max(0, nextSkipsRemaining),
        rounds: [
            ...session.rounds,
            skippedRound
        ],
        currentRound: skippedRound,
        status: nextSkipsRemaining <= 0 ? "gameOver" : "inRound",
        updatedAt: nowIso()
    };
}
async function createNewSession(mode) {
    const createdAt = nowIso();
    return {
        mode,
        status: "idle",
        skipsRemaining: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GAME_CONFIG"].initialSkips,
        seenMovieIds: [],
        rounds: [],
        currentRound: null,
        totalCorrect: 0,
        createdAt,
        updatedAt: createdAt
    };
}
async function advanceToNextRound(session) {
    if (session.status === "gameOver") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$game$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidSessionStateError"]("Game is over.");
    }
    if (session.currentRound && !session.currentRound.solved && !session.currentRound.skipped) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$game$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidSessionStateError"]("Current round must be solved or skipped first.");
    }
    const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$select$2d$next$2d$round$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["selectNextRound"])({
        seenMovieIds: session.seenMovieIds,
        mode: session.mode
    });
    if (next.exhausted || !next.round) {
        return {
            ...session,
            status: "complete",
            currentRound: null,
            updatedAt: nowIso()
        };
    }
    return {
        ...session,
        status: "inRound",
        seenMovieIds: [
            ...session.seenMovieIds,
            next.round.answer.movieId
        ],
        currentRound: next.round,
        updatedAt: nowIso()
    };
}
function applyGuess(session, guess) {
    if (session.status !== "inRound") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$game$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidSessionStateError"]("Cannot guess when game is not in a round.");
    }
    const current = ensureCurrentRound(session);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$lib$2f$answer$2d$matcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGuessCorrect"])(guess, current.answer.title, current.answer.originalTitle);
    const updatedRound = {
        ...current,
        guesses: [
            ...current.guesses,
            guess
        ]
    };
    if (!result.isCorrect) {
        if (updatedRound.guesses.length >= __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GAME_CONFIG"].maxGuessesPerMovie) {
            return applySkipForRound(session, updatedRound);
        }
        return {
            ...session,
            currentRound: updatedRound,
            updatedAt: nowIso()
        };
    }
    const solvedRound = {
        ...updatedRound,
        solved: true
    };
    return {
        ...session,
        rounds: [
            ...session.rounds,
            solvedRound
        ],
        currentRound: solvedRound,
        totalCorrect: session.totalCorrect + 1,
        updatedAt: nowIso()
    };
}
function applySkip(session) {
    if (session.status !== "inRound") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$game$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidSessionStateError"]("Cannot skip when game is not in a round.");
    }
    const current = ensureCurrentRound(session);
    return applySkipForRound(session, current);
}
}),
"[project]/Projects/screentime/src/app/api/game/_shared.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorResponse",
    ()=>errorResponse,
    "parseJson",
    ()=>parseJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/node_modules/next/server.js [app-route] (ecmascript)");
;
async function parseJson(request, schema) {
    const json = await request.json();
    return schema.parse(json);
}
function errorResponse(error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: false,
        error: message
    }, {
        status: 400
    });
}
}),
"[project]/Projects/screentime/src/app/api/game/start/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$lib$2f$schemas$2f$game$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/lib/schemas/game-api.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/server/game/session.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$app$2f$api$2f$game$2f$_shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/app/api/game/_shared.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(request) {
    try {
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$app$2f$api$2f$game$2f$_shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseJson"])(request, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$lib$2f$schemas$2f$game$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startGameRequestSchema"]);
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$server$2f$game$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createNewSession"])(payload.mode);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            session
        });
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$app$2f$api$2f$game$2f$_shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])(error);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07_eggf._.js.map