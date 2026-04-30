const codeLines = [
  "import { vision, craft } from '@/meshak/portfolio';",
  "",
  "const developer = new FullStackDeveloper('Meshak');",
  "developer.build({",
  "  web: 'Next.js',",
  "  mobile: 'React Native',",
  "  backend: 'Node.js',",
  "  style: 'clean and futuristic',",
  "});",
  "",
  "> compiling creative ideas...",
  "> deployed. ready for visitors.",
];

export const CodeTerminal = () => {
  return (
    <section
      id="terminal"
      className="relative flex w-full items-center justify-center overflow-hidden px-6 py-10 sm:py-16"
    >
      <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-[260px] max-w-[900px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),rgba(168,85,247,0.12)_38%,transparent_70%)] blur-3xl" />

      <div className="relative w-full max-w-[860px] rounded-[28px] border border-white/10 bg-[#05040b]/95 shadow-[0_0_80px_rgba(124,58,237,0.35),0_0_120px_rgba(6,182,212,0.16)] backdrop-blur">
        <div className="absolute -inset-px -z-10 rounded-[28px] bg-gradient-to-r from-cyan-400/40 via-purple-500/50 to-amber-400/40 opacity-70 blur-sm" />

        <div className="flex min-h-[72px] items-center gap-4 border-b border-white/10 px-5 sm:px-8">
          <div className="flex shrink-0 gap-3">
            <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57] shadow-[0_0_16px_rgba(255,95,87,0.7)]" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_16px_rgba(255,189,46,0.7)]" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#28c840] shadow-[0_0_16px_rgba(40,200,64,0.7)]" />
          </div>

          <p className="min-w-0 font-mono text-sm text-gray-400 sm:text-lg">
            <span className="hidden sm:inline">meshak@portfolio: </span>
            <span className="text-gray-300">~/space-portfolio</span>
          </p>
        </div>

        <div className="overflow-hidden px-5 py-7 sm:px-8 sm:py-9">
          <pre
            aria-label="Portfolio code terminal"
            className="whitespace-pre-wrap break-words font-mono text-[13px] leading-7 text-gray-200 sm:text-[20px] sm:leading-9"
          >
            {codeLines.map((line, index) => (
              <span
                key={`${line}-${index}`}
                className={
                  line.startsWith(">")
                    ? "block text-cyan-200"
                    : line.includes("FullStackDeveloper") ||
                        line.includes("build")
                      ? "block text-purple-200"
                      : line.includes("'")
                        ? "block text-amber-100"
                        : "block"
                }
              >
                {line}
              </span>
            ))}
            <span className="inline-block h-5 w-2 translate-y-1 bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.9)] animate-pulse sm:h-7 sm:w-3" />
          </pre>
        </div>
      </div>
    </section>
  );
};
