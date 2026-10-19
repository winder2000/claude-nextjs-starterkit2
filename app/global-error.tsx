"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="ko">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          gap: "1rem",
          fontFamily: "sans-serif",
          color: "#111",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, margin: 0 }}>
          예기치 않은 오류가 발생했습니다
        </h2>
        {error.digest && (
          <p style={{ fontSize: "0.75rem", color: "#888", margin: 0 }}>
            오류 코드: {error.digest}
          </p>
        )}
        <button
          onClick={reset}
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "0.5rem",
            border: "1px solid #e5e7eb",
            background: "#fff",
            cursor: "pointer",
            fontSize: "0.875rem",
          }}
        >
          다시 시도
        </button>
      </body>
    </html>
  )
}
