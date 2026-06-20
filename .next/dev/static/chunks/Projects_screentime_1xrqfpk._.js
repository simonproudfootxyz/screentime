(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Projects/screentime/src/components/game/CharacterClueList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CharacterClueList",
    ()=>CharacterClueList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function CharacterClueList({ clues }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Character clues"
            }, void 0, false, {
                fileName: "[project]/Projects/screentime/src/components/game/CharacterClueList.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: clues.map((clue, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: clue.name
                    }, `${clue.name}-${index}`, false, {
                        fileName: "[project]/Projects/screentime/src/components/game/CharacterClueList.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Projects/screentime/src/components/game/CharacterClueList.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/screentime/src/components/game/CharacterClueList.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = CharacterClueList;
var _c;
__turbopack_context__.k.register(_c, "CharacterClueList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/screentime/src/components/game/GameOverCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameOverCard",
    ()=>GameOverCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function GameOverCard({ session, onRestart, loading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Game Over"
            }, void 0, false, {
                fileName: "[project]/Projects/screentime/src/components/game/GameOverCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "You ran out of skips before solving the next movie."
            }, void 0, false, {
                fileName: "[project]/Projects/screentime/src/components/game/GameOverCard.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Total correct: ",
                    session.totalCorrect
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/screentime/src/components/game/GameOverCard.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Rounds played: ",
                    session.rounds.length
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/screentime/src/components/game/GameOverCard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onRestart,
                disabled: loading,
                children: "Play Again"
            }, void 0, false, {
                fileName: "[project]/Projects/screentime/src/components/game/GameOverCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/screentime/src/components/game/GameOverCard.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = GameOverCard;
var _c;
__turbopack_context__.k.register(_c, "GameOverCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/screentime/src/components/game/GameStatusBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameStatusBar",
    ()=>GameStatusBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function GameStatusBar({ skipsRemaining, totalCorrect, roundsPlayed }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "status-bar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Skips remaining: ",
                    skipsRemaining
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/screentime/src/components/game/GameStatusBar.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Correct: ",
                    totalCorrect
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/screentime/src/components/game/GameStatusBar.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Rounds played: ",
                    roundsPlayed
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/screentime/src/components/game/GameStatusBar.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/screentime/src/components/game/GameStatusBar.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = GameStatusBar;
var _c;
__turbopack_context__.k.register(_c, "GameStatusBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/screentime/src/components/game/GuessForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuessForm",
    ()=>GuessForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function GuessForm({ onSubmitGuess, disabled }) {
    _s();
    const [guess, setGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function onSubmit(event) {
        event.preventDefault();
        const value = guess.trim();
        if (!value) {
            return;
        }
        await onSubmitGuess(value);
        setGuess("");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        className: "guess-form",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: guess,
                onChange: (event)=>setGuess(event.target.value),
                placeholder: "Enter movie title",
                disabled: disabled,
                "aria-label": "Movie title guess"
            }, void 0, false, {
                fileName: "[project]/Projects/screentime/src/components/game/GuessForm.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: disabled,
                children: "Submit Guess"
            }, void 0, false, {
                fileName: "[project]/Projects/screentime/src/components/game/GuessForm.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/screentime/src/components/game/GuessForm.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(GuessForm, "+yYR1kvazTqE9ExEudfqDe1IMJ8=");
_c = GuessForm;
var _c;
__turbopack_context__.k.register(_c, "GuessForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/screentime/src/client/state/game-actions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "guessRound",
    ()=>guessRound,
    "nextRound",
    ()=>nextRound,
    "skipRound",
    ()=>skipRound,
    "startGame",
    ()=>startGame
]);
async function post(url, payload) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const json = await response.json();
    if (!response.ok || !json.ok || !json.session) {
        throw new Error(json.error ?? "Request failed");
    }
    return json.session;
}
async function startGame() {
    return post("/api/game/start", {
        mode: {
            type: "classic"
        }
    });
}
async function nextRound(session) {
    return post("/api/game/next", {
        session
    });
}
async function guessRound(session, guess) {
    return post("/api/game/guess", {
        session,
        guess
    });
}
async function skipRound(session) {
    return post("/api/game/skip", {
        session
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/screentime/src/client/state/game-reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gameReducer",
    ()=>gameReducer
]);
function gameReducer(state, action) {
    switch(action.type){
        case "session/replace":
            return action.session;
        case "session/clear":
            return null;
        default:
            return state;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/screentime/src/config/game.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GAME_CONFIG",
    ()=>GAME_CONFIG,
    "STORAGE_KEYS",
    ()=>STORAGE_KEYS
]);
const GAME_CONFIG = {
    initialSkips: 5,
    maxCharacterClues: 9,
    minRating: 6.5,
    minVoteCount: 100,
    language: "en-US",
    minGuessLengthForSubstring: 4,
    minGuessTokensForSubstring: 2,
    tmdbDiscoverSort: "popularity.desc",
    maxDiscoverPages: 20
};
const STORAGE_KEYS = {
    session: "movie-guessing-game.session.v1"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/screentime/src/client/storage/session-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "loadSession",
    ()=>loadSession,
    "saveSession",
    ()=>saveSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/config/game.ts [app-client] (ecmascript)");
;
function loadSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].session);
    if (!raw) {
        return null;
    }
    try {
        return JSON.parse(raw);
    } catch  {
        return null;
    }
}
function saveSession(session) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].session, JSON.stringify(session));
}
function clearSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$config$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].session);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/screentime/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$components$2f$game$2f$CharacterClueList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/components/game/CharacterClueList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$components$2f$game$2f$GameOverCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/components/game/GameOverCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$components$2f$game$2f$GameStatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/components/game/GameStatusBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$components$2f$game$2f$GuessForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/components/game/GuessForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$state$2f$game$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/client/state/game-actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$state$2f$game$2d$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/client/state/game-reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$storage$2f$session$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/screentime/src/client/storage/session-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [session, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$state$2f$game$2d$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameReducer"], null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const restored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$storage$2f$session$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSession"])();
            if (restored) {
                dispatch({
                    type: "session/replace",
                    session: restored
                });
            }
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (session) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$storage$2f$session$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSession"])(session);
            }
        }
    }["Home.useEffect"], [
        session
    ]);
    async function runAction(action) {
        try {
            setLoading(true);
            setError(null);
            const next = await action();
            dispatch({
                type: "session/replace",
                session: next
            });
        } catch (actionError) {
            setError(actionError instanceof Error ? actionError.message : "Unexpected error");
        } finally{
            setLoading(false);
        }
    }
    async function onStart() {
        await runAction(async ()=>{
            const created = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$state$2f$game$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startGame"])();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$state$2f$game$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRound"])(created);
        });
    }
    async function onGuess(guess) {
        if (!session) {
            return;
        }
        await runAction(async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$state$2f$game$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guessRound"])(session, guess));
    }
    async function onSkip() {
        if (!session) {
            return;
        }
        await runAction(async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$state$2f$game$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipRound"])(session));
    }
    async function onContinue() {
        if (!session) {
            return;
        }
        await runAction(async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$state$2f$game$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRound"])(session));
    }
    async function onRestart() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$client$2f$storage$2f$session$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSession"])();
        dispatch({
            type: "session/clear"
        });
        await onStart();
    }
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Movie Guessing Game"
                    }, void 0, false, {
                        fileName: "[project]/Projects/screentime/src/app/page.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Guess the movie from character names. You get 5 skips in total."
                    }, void 0, false, {
                        fileName: "[project]/Projects/screentime/src/app/page.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onStart,
                        disabled: loading,
                        children: "Start Game"
                    }, void 0, false, {
                        fileName: "[project]/Projects/screentime/src/app/page.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "error",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Projects/screentime/src/app/page.tsx",
                        lineNumber: 89,
                        columnNumber: 20
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/screentime/src/app/page.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Projects/screentime/src/app/page.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    }
    if (session.status === "gameOver") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$components$2f$game$2f$GameOverCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameOverCard"], {
                session: session,
                onRestart: onRestart,
                loading: loading
            }, void 0, false, {
                fileName: "[project]/Projects/screentime/src/app/page.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Projects/screentime/src/app/page.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this);
    }
    const round = session.currentRound;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Movie Guessing Game"
                }, void 0, false, {
                    fileName: "[project]/Projects/screentime/src/app/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$components$2f$game$2f$GameStatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameStatusBar"], {
                    skipsRemaining: session.skipsRemaining,
                    totalCorrect: session.totalCorrect,
                    roundsPlayed: session.rounds.length
                }, void 0, false, {
                    fileName: "[project]/Projects/screentime/src/app/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                round ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$components$2f$game$2f$CharacterClueList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CharacterClueList"], {
                            clues: round.clues
                        }, void 0, false, {
                            fileName: "[project]/Projects/screentime/src/app/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$src$2f$components$2f$game$2f$GuessForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuessForm"], {
                            onSubmitGuess: onGuess,
                            disabled: loading || round.solved || round.skipped
                        }, void 0, false, {
                            fileName: "[project]/Projects/screentime/src/app/page.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onSkip,
                            disabled: loading || round.solved || round.skipped,
                            children: "Skip (Reveal Answer)"
                        }, void 0, false, {
                            fileName: "[project]/Projects/screentime/src/app/page.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        round.guesses.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "subtle",
                            children: [
                                "Last guess: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: round.guesses[round.guesses.length - 1]
                                }, void 0, false, {
                                    fileName: "[project]/Projects/screentime/src/app/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/screentime/src/app/page.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this) : null,
                        round.solved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "subtle",
                                    children: [
                                        "Correct! The answer was ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: round.answer.title
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/screentime/src/app/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 43
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/screentime/src/app/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onContinue,
                                    disabled: loading,
                                    children: "Next Movie"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/screentime/src/app/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : null,
                        round.skipped ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "subtle",
                                    children: [
                                        "Skipped answer: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: round.answer.title
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/screentime/src/app/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/screentime/src/app/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this),
                                session.status !== "gameOver" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onContinue,
                                    disabled: loading,
                                    children: "Next Movie"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/screentime/src/app/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 19
                                }, this) : null
                            ]
                        }, void 0, true) : null
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading next round..."
                }, void 0, false, {
                    fileName: "[project]/Projects/screentime/src/app/page.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this),
                error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$screentime$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "error",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Projects/screentime/src/app/page.tsx",
                    lineNumber: 153,
                    columnNumber: 18
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/Projects/screentime/src/app/page.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/screentime/src/app/page.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(Home, "Pv14MQqV1Tvwn9m21R0O+hevWEk=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/screentime/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/Projects/screentime/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/Projects/screentime/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)\n- Execution of <EcmascriptModuleAsset as EcmascriptChunkPlaceable>::chunk_item_content failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/Projects/screentime/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/Projects/screentime/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/Projects/screentime/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)\n- Execution of <EcmascriptModuleAsset as EcmascriptChunkPlaceable>::chunk_item_content failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
]);

//# sourceMappingURL=Projects_screentime_1xrqfpk._.js.map