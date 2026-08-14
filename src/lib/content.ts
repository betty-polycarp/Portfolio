/**
 * Every visible string on the page lives here.
 *
 * Two reasons: the copy can be audited in one file (no em-dashes, no
 * en-dashes, one voice), and Betty can edit the site without touching layout.
 */

export const profile = {
  name: "Betty Polycarp",
  role: "Software engineer and full stack web developer",
  email: "bettypolycarp2000@gmail.com",
  siteUrl: "https://bettypolycarp.com", // TODO: point at the real domain before deploying.
  summary:
    "Software engineer and full stack web developer building production Laravel, Livewire, React and Next.js applications.",
} as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/betty-polycarp" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/betty-polycarp-04a518288" },
] as const;

export const navLinks = [
  // "Home" points at the top of the page, not at the about section, because
  // that is what the label promises.
  { label: "Home", href: "#top" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  // Nav item rather than a button: the header carries no call to action, so
  // this is the persistent route to contact from anywhere on the page.
  { label: "Contact", href: "#contact" },
] as const;

/**
 * One label per intent, used everywhere on the page.
 * contact intent  -> "Let's talk"
 * portfolio intent -> "View my work"
 */
export const cta = {
  contact: "Let's talk",
  work: "View my work",
} as const;

export const hero = {
  headline: "I make complex things feel simple.",
  subtext:
    "I am Betty Polycarp, a software engineer who builds digital products that turn complex ideas and real world problems into simple, useful experiences.",
  imageId: "/images/hero-section.jpg",
  imageAlt:
    "A backlit laptop keyboard photographed close up, the keys glowing in the dark.",
} as const;

export const about = {
  heading: "How I got here",
  lead: "I am a software engineer with a strong focus on Laravel and modern web technologies. I turn business ideas into reliable software, and I keep the codebase clean enough that the next person can extend it safely.",
  body: [
    "Over the past few years I have worked across backend development, frontend integration, database design, testing, and long term maintenance. The part I enjoy most is tracing a difficult bug through a large codebase and fixing the cause instead of the symptom.",
    "Outside client work I am usually learning. Right now that means AI assisted development with Claude Code, frontend engineering with Next.js, and building small products that solve practical problems.",
  ],
  nowHeading: "Working on now",
  now: [
    "Laravel, Livewire, React and Next.js in production",
    "AI assisted development with Claude Code",
    "Clean developer workflows and scalable architecture",
  ],
  imageId: "/images/about-project.jpeg",
  imageAlt: "Betty Polycarp.",
} as const;

export type StackGroup = {
  name: string;
  note: string;
  items: readonly string[];
};

export const stack = {
  heading: "What I build with",
  groups: {
    backend: {
      name: "Backend",
      note: "Where most of my time goes. Services, jobs and events behind thin controllers.",
      items: [
        "PHP",
        "Laravel",
        "Livewire",
        "REST APIs",
        "Authentication",
        "Queues",
      ],
    },
    frontend: {
      name: "Frontend",
      note: "Interfaces that match the services behind them.",
      items: [
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
    },
    databases: {
      name: "Databases",
      note: "Schema first, always.",
      items: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "Schema design",
        "Migrations",
        "Eloquent ORM",
      ],
    },
    tools: {
      name: "Tools and DevOps",
      note: "The daily loop, from first commit to deploy.",
      items: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Composer",
        "NPM",
        "Docker",
        "CI/CD",
        "VS Code",
        "Claude Code",
      ],
    },
    testing: {
      name: "Testing",
      note: "Enough coverage to change things without fear.",
      items: [
        "PHPUnit",
        "Feature tests",
        "Manual QA",
        "Code review",
        "Debugging",
      ],
    },
    emerging: {
      name: "Learning next",
      note: "Where I am spending my curiosity, honestly labelled as in progress.",
      items: [
        "Software architecture",
        "System design",
        "AI assisted workflows",
        "Blockchain",
        "Web3",
        "Smart contracts",
        "DeFi",
        "Prediction markets",
      ],
    },
  } satisfies Record<string, StackGroup>,
  imageId: 213,
  imageAlt: "An open sea horizon under a wide sky.",
} as const;

/**
 * TODO: Betty to replace the year labels and add employer names.
 * The progression below is taken from her own account of the work
 * (backend, frontend integration, database design, testing, maintenance).
 * The dates are a scaffold, not a verified employment record.
 */
export const experience = {
  heading: "How I have grown",
  entries: [
    {
      period: "2022",
      title: "First production work",
      body: "Joined an existing Laravel codebase and shipped features against real users. Learned that most of engineering is reading code you did not write.",
      tags: ["Laravel", "MySQL", "Git"],
    },
    {
      period: "2023",
      title: "Owning the backend",
      body: "Took responsibility for schema design, REST endpoints and authentication. Started reviewing pull requests and writing the tests that caught regressions.",
      tags: ["REST APIs", "Schema design", "Authentication"],
    },
    {
      period: "2024 to 2025",
      title: "Full stack delivery",
      body: "Owned features end to end, from migration to deployed screen, in Livewire and React. Debugging other people's edge cases became the fastest way to learn a system.",
      tags: ["Livewire", "React", "Testing"],
    },
    {
      period: "2026 to now",
      title: "Architecture and tooling",
      body: "Designing systems before building them, working in Next.js, and using AI assisted workflows to move faster without losing control of the codebase.",
      tags: ["Next.js", "Architecture", "Claude Code"],
    },
  ],
} as const;

export type Project = {
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  role: string;
  tech: readonly string[];
  outcome: string;
  /** A path under `public/` such as "/images/work.jpg", or a Picsum id. */
  imageId: number | string;
  imageAlt: string;
};

export const projects = {
  heading: "Projects",
  intro:
    "Different projects that show different parts of the job: architecture, data modelling, product thinking and delivery.",
  items: [
    {
      name: "Smart Farming Platform",
      tagline: "Agricultural management with live commodity pricing",
      problem:
        "Farmers and agribusinesses track commodity prices across scattered sources, so the number they act on is often already stale.",
      solution:
        "I designed the platform architecture, researched live agricultural pricing APIs, and planned backend services that can ingest market data without blocking the rest of the app.",
      role: "Architecture and backend design",
      tech: ["Laravel", "REST APIs", "MySQL", "JavaScript"],
      outcome:
        "A foundation that can carry real time market information and grow into full farm management.",
      imageId: "/images/smart_farm.jpg",
      imageAlt:
        "A centre pivot irrigation boom standing over a field of young green crops.",
    },
    {
      name: "Church Outreach Management System",
      tagline: "Outreach and follow up, off paper",
      problem:
        "Outreach is still recorded in notebooks, so new contacts, follow ups and department handovers get lost between events.",
      solution:
        "I modelled the relationships between members, departments and follow up cycles, then planned the automated workflows that move a new contact through them.",
      role: "System design and data modelling",
      tech: ["Laravel", "MySQL", "Schema design", "Workflow design"],
      outcome:
        "A platform design that keeps outreach records and member engagement in one traceable place.",
      imageId: 192,
      imageAlt:
        "A hall with tall windows and people seated at long shared tables.",
    },
    {
      name: "Memory Vault",
      tagline: "Private cloud storage for personal archives",
      problem:
        "General cloud drives are built for files, not for memories, so people lose the thread of what they saved and why.",
      solution:
        "I designed the MVP: authentication, storage management, folder based organisation, and a premium tier that stays cheap to run as it scales.",
      role: "Product and architecture",
      tech: ["Laravel", "Authentication", "File storage", "Schema design"],
      outcome:
        "A roadmap built around usability and storage costs that hold up as the archive grows.",
      imageId: 24,
      imageAlt:
        "An open book resting on a wooden surface.",
    },
    {
      name: "This portfolio",
      tagline: "A developer site that does not look generated",
      problem:
        "Most developer portfolios look the same, so the site says nothing about how the developer actually thinks.",
      solution:
        "Built in Next.js with reusable Claude Skills driving the design rules, so the layout system is documented and repeatable rather than copied from a template.",
      role: "Design and build",
      tech: ["Next.js", "React", "Tailwind CSS", "Claude Code"],
      outcome:
        "An evolving site that shows the engineering approach as much as the work.",
      imageId: 180,
      imageAlt:
        "A laptop beside a notebook of hand drawn layouts, photographed from above.",
    },
  ] satisfies readonly Project[],
} as const;

export const process = {
  heading: "How I work",
  intro:
    "The same five moves on every project, whether it is a two week fix or a new platform.",
  steps: [
    {
      name: "Understand",
      body: "Ask what the user actually needs, what the business measures, and what already exists in the codebase.",
    },
    {
      name: "Plan",
      body: "Model the data first. Decide the boundaries, the routes and the failure cases before the first migration.",
    },
    {
      name: "Build",
      body: "Small commits, readable names, thin controllers. Ship a working slice early instead of a perfect module late.",
    },
    {
      name: "Test",
      body: "Feature tests on the paths that carry money or data. Manual passes on everything a real user touches.",
    },
    {
      name: "Improve",
      body: "Watch how it behaves in production, fix the cause instead of the symptom, and remove what is no longer used.",
    },
  ],
} as const;

export const thinking = {
  heading: "How I think about systems",
  intro:
    "The opinions I bring to a codebase before anyone asks me to write a line of it.",
  principles: [
    {
      title: "Architecture",
      body: "I design around boundaries. Services, jobs and events keep controllers thin and make the next feature cheaper to add than the last one.",
    },
    {
      title: "Data modelling",
      body: "The schema is the product. Normalise first, index for the queries that actually run, and keep every migration reversible.",
    },
    {
      title: "API design",
      body: "Predictable resources, honest status codes, versioned when they need to be. The contract matters more than the framework serving it.",
    },
    {
      title: "Testing",
      body: "Tests exist so I can change things safely. I cover the paths that break quietly, not every getter on every model.",
    },
    {
      title: "Performance and debugging",
      body: "Measure before optimising. Most Laravel slowness is an N+1 query or a missing index, not the language.",
    },
  ],
} as const;

/**
 * Fourteen capabilities, grouped into four clusters. The clusters preserve the
 * original order exactly, so nothing is reordered, but they break what would
 * otherwise be a fourteen row list into scannable chunks.
 */
export const expertise = {
  heading: "My expertise",
  intro: "What I do",
  groups: [
    {
      name: "Building applications",
      items: [
        {
          title: "Full stack web development",
          body: "Building complete web applications from the frontend to backend, database, APIs, and authentication.",
        },
        {
          title: "Backend development",
          body: "Strong focus on PHP and Laravel, including application architecture, business logic, APIs, database operations, and backend features.",
        },
        {
          title: "Laravel and Livewire",
          body: "Developing dynamic, server driven applications with Laravel and Livewire.",
        },
        {
          title: "Frontend development",
          body: "Building responsive and interactive interfaces using JavaScript, React, Next.js, HTML, CSS, Tailwind CSS, and Bootstrap.",
        },
      ],
    },
    {
      name: "Data and integration",
      items: [
        {
          title: "API development and integration",
          body: "Designing and consuming APIs, connecting applications to external services, and handling data exchange between systems.",
        },
        {
          title: "Database development",
          body: "Working with MySQL, SQLite, PostgreSQL, database schemas, migrations, queries, and ORM based data management.",
        },
      ],
    },
    {
      name: "Architecture and quality",
      items: [
        {
          title: "System architecture",
          body: "Understanding and implementing concepts such as monoliths, modular applications, microservices, event driven architecture, and system decomposition.",
        },
        {
          title: "Testing and quality assurance",
          body: "Writing and maintaining automated tests with PHPUnit, debugging applications, validating features, and improving software reliability.",
        },
        {
          title: "DevOps and development workflows",
          body: "Working with Git, GitHub, Bitbucket, CI/CD, Composer, NPM, Docker, and deployment workflows.",
        },
        {
          title: "Performance and reliability",
          body: "Debugging production issues, optimising queries and application logic, and improving application stability.",
        },
        {
          title: "Problem solving and debugging",
          body: "Investigating complex bugs across the frontend, backend, database, testing, and deployment layers.",
        },
      ],
    },
    {
      name: "Product and what is next",
      items: [
        {
          title: "Software product development",
          body: "Turning ideas into functional products, from defining the problem and designing features to building and testing the application.",
        },
        {
          title: "AI and emerging technology",
          body: "Exploring AI, blockchain, Web3, DeFi, smart contracts, and prediction markets, with an interest in applying emerging technologies to real world problems.",
        },
        {
          title: "Technical research and learning",
          body: "Strong interest in researching technologies, understanding how systems work, and continuously expanding my technical capabilities.",
        },
      ],
    },
  ],
} as const;

export const contact = {
  heading: "Have a problem worth solving?",
  body: "I am open to full stack roles, Laravel contract work, and collaborations on products that need to actually ship.",
  emailLabel: "Copy email address",
  emailCopied: "Email copied",
  emailFailed: "Copy failed, the address is above",
} as const;

export const footer = {
  note: "Built with Next.js and Tailwind CSS.",
  copyright: `${new Date().getFullYear()} Betty Polycarp`,
} as const;
