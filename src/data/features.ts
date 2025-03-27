interface Feature {
  icon: string;
  title: string;
  highlight: string;
  description: string;
  [key: string]: string;
}

// Feature data
export const features: Feature[] = [
  {
    icon: "framework",
    title: "Support for popular",
    highlight: "frameworks",
    description:
      "Supports popular frameworks, including React, Vue, Svelte, Astro, Solid, Next.js, Nuxt, Tanstack Start, Hono, and more.",
  },
  {
    icon: "authentication",
    title: "Email & Password",
    highlight: "Authentication",
    description:
      "Built-in support for email and password authentication, with session and account management features.",
  },
  {
    icon: "social",
    title: "Support multiple",
    highlight: "OAuth providers",
    description:
      "Allow users to sign in with their accounts, including GitHub, Google, Discord, Twitter, and more.",
  },
  {
    icon: "twofactor",
    title: "Multi Factor",
    highlight: "Authentication",
    description:
      "Secure your users accounts with two factor authentication with a few lines of code.",
  },
  {
    icon: "organization",
    title: "Organization",
    highlight: "Members and Invitation",
    description:
      "Multi tenant support with members, organization, teams and invitation with access control.",
  },
  {
    icon: "plugin",
    title: "A lot more features with",
    highlight: "plugins",
    description:
      "Improve your application experience with our official plugins and those created by the community.",
  },
];

export const iconMap = {
  framework: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`,
  authentication: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  social: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  twofactor: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="14" x="8" y="5" rx="1"></rect><path d="M4 5h4"></path><path d="M16 5h4"></path><path d="M4 19h4"></path><path d="M16 19h4"></path></svg>`,
  organization: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  plugin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8"></path><path d="M4.93 10.93 10 16"></path><path d="M2 18h12"></path><path d="M19 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>`,
};
