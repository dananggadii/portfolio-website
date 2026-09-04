"use client";

/* ── Social icons — same monochrome SVGs as were in the hero ── */
function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.57A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52ZM12 21.94a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.94.98-3.62-.24-.38A9.93 9.93 0 0 1 2.06 12C2.06 6.52 6.52 2.06 12 2.06S21.94 6.52 21.94 12 17.48 21.94 12 21.94Zm5.44-7.44c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a1.98 1.98 0 0 1-1.977-1.978 1.978 1.978 0 1 1 1.977 1.978Zm1.707 13.019H3.63V9h3.414v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        fill="currentColor"
      />
    </svg>
  );
}

const socialLinks = [
  { href: "https://wa.me/+6285718917735",    label: "WhatsApp", Icon: WhatsAppIcon },
  { href: "https://linkedin.com/in/danangadi", label: "LinkedIn",  Icon: LinkedInIcon },
  { href: "https://github.com/dananggadii",    label: "GitHub",    Icon: GitHubIcon },
];

export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="px-5"
      style={{
        backgroundColor: "#FAFAF8",
        borderTop: "1px solid #E8E6E1",
        paddingTop: 48,
        paddingBottom: 48,
      }}
    >
      <div className="max-w-content-xl mx-auto flex flex-col items-center gap-4 text-center">

        {/* Tagline */}
        <p className="text-body-md" style={{ color: "#5C5C5C" }}>
          Open to new opportunities — let&apos;s talk.
        </p>

        {/* Email */}
        <a
          href="mailto:danangadi2005@gmail.com"
          className="link-muted text-body-sm"
        >
          danangadi2005@gmail.com
        </a>

        {/* Social icons */}
        <div className="flex items-center gap-4" style={{ marginTop: 4 }}>
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="link-muted flex items-center justify-center p-2.5 -m-2.5"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-mono text-body-xs" style={{ color: "#737373" }}>
          © 2026 Danang
        </p>

      </div>
    </footer>
  );
}
