import {
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const contactFields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
    icon: UserIcon,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
    icon: EnvelopeIcon,
  },
] as const;

const projectTypes = [
  "Business website",
  "Portfolio refresh",
  "AI automation",
  "Dashboard or tool",
  "Other idea",
] as const;

export const Contact = () => {
  const netlifyFormProps = {
    "data-netlify": "true",
    "netlify-honeypot": "bot-field",
  } as const;

  return (
    <section
      id="contact"
      className="relative flex w-full items-center justify-center overflow-hidden px-6 py-24 sm:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-6">
          <div className="Welcome-box border border-[#7042f88b] px-[12px] py-[8px] opacity-[0.9]">
            <EnvelopeIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
            <p className="Welcome-text text-[13px]">Contact Me</p>
          </div>

          <div>
            <h2 className="max-w-[620px] text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Let&apos;s build something useful together.
            </h2>
            <p className="mt-5 max-w-[560px] text-base leading-8 text-gray-400 sm:text-lg">
              Tell me about the website, automation, or interface you want to
              create, and I&apos;ll reply with the next practical step.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-gray-300 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="font-semibold text-cyan-200">Project focus</p>
              <p className="mt-2 text-gray-400">
                Business sites, portfolios, dashboards, and AI workflows.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="font-semibold text-amber-200">Based in Portugal</p>
              <p className="mt-2 text-gray-400">
                Open to remote projects and clear, friendly collaboration.
              </p>
            </div>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          action="/contact-success"
          className="relative rounded-lg border border-white/10 bg-[#05040b]/90 p-5 shadow-[0_0_70px_rgba(124,58,237,0.24)] backdrop-blur sm:p-7"
          {...netlifyFormProps}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {contactFields.map((field) => {
              const Icon = field.icon;

              return (
                <div key={field.id} className="space-y-2">
                  <label
                    htmlFor={field.id}
                    className="text-sm font-medium text-gray-200"
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    <Icon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-200/70" />
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      className="h-12 w-full rounded-md border border-white/10 bg-white/[0.04] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-300/70 focus:bg-white/[0.07]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 space-y-2">
            <label
              htmlFor="projectType"
              className="text-sm font-medium text-gray-200"
            >
              Project type
            </label>
            <div className="relative">
              <BriefcaseIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-200/80" />
              <select
                id="projectType"
                name="projectType"
                required
                defaultValue=""
                className="h-12 w-full rounded-md border border-white/10 bg-[#0b0717] pl-11 pr-4 text-sm text-white outline-none transition focus:border-amber-200/70 focus:bg-[#100b20]"
              >
                <option value="" disabled>
                  Choose a project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-200"
            >
              Message
            </label>
            <div className="relative">
              <ChatBubbleLeftRightIcon className="pointer-events-none absolute left-3 top-4 h-5 w-5 text-purple-200/80" />
              <textarea
                id="message"
                name="message"
                required
                minLength={20}
                rows={6}
                placeholder="Share the goal, timeline, and any useful details."
                className="min-h-[150px] w-full resize-y rounded-md border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm leading-6 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-300/70 focus:bg-white/[0.07]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="button-primary mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold text-white transition"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
