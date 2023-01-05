import App from "../../app.json";

const COLOR_WAY = {
  indigo: {
    card: ["bg-indigo-50", "text-indigo-700"],
    base: ["bg-indigo-600", "dark:bg-indigo-800"],
    footer: "dark:bg-indigo-900",
    accent: "text-indigo-600",
  },
  red: {
    card: ["bg-red-50", "text-red-700"],
    base: ["bg-red-600", "dark:bg-red-800"],
    footer: "dark:bg-red-900",
    accent: "text-red-600",
  },
  teal: {
    card: ["bg-teal-50", "text-teal-700"],
    base: ["bg-teal-600", "dark:bg-teal-800"],
    footer: "dark:bg-teal-900",
    accent: "text-teal-600",
  },
  green: {
    card: ["bg-green-50", "text-green-700"],
    base: ["bg-green-600", "dark:bg-green-800"],
    footer: "dark:bg-green-900",
    accent: "text-green-600",
  },
  orange: {
    card: ["bg-orange-50", "text-orange-700"],
    base: ["bg-orange-600", "dark:bg-orange-600"],
    footer: "dark:bg-orange-800",
    accent: "text-orange-600",
  },
  yellow: {
    card: ["bg-yellow-50", "text-yellow-700"],
    base: ["bg-yellow-600", "dark:bg-yellow-600"],
    footer: "dark:bg-yellow-800",
    accent: "text-yellow-600",
  },
  cyan: {
    card: ["bg-cyan-50", "text-cyan-700"],
    base: ["bg-cyan-600", "dark:bg-cyan-800"],
    footer: "dark:bg-cyan-900",
    accent: "text-cyan-600",
  },
  blue: {
    card: ["bg-blue-50", "text-blue-700"],
    base: ["bg-blue-600", "dark:bg-blue-800"],
    footer: "dark:bg-blue-900",
    accent: "text-blue-600",
  },
  lime: {
    card: ["bg-lime-50", "text-lime-700"],
    base: ["bg-lime-600", "dark:bg-lime-800"],
    footer: "dark:bg-lime-900",
    accent: "text-lime-600",
  },
  rose: {
    card: ["bg-rose-50", "text-rose-700"],
    base: ["bg-rose-600", "dark:bg-rose-800"],
    footer: "dark:bg-rose-900",
    accent: "text-rose-600",
  },
  violet: {
    card: ["bg-violet-50", "text-violet-700"],
    base: ["bg-violet-600", "dark:bg-violet-800"],
    footer: "dark:bg-violet-900",
    accent: "text-violet-600",
  },
  purple: {
    card: ["bg-purple-50", "text-purple-700"],
    base: ["bg-purple-600", "dark:bg-purple-800"],
    footer: "dark:bg-purple-900",
    accent: "text-purple-600",
  },
  sky: {
    card: ["bg-sky-50", "text-sky-700"],
    base: ["bg-sky-600", "dark:bg-sky-800"],
    footer: "dark:bg-sky-900",
    accent: "text-sky-600",
  },
  emerald: {
    card: ["bg-emerald-50", "text-emerald-700"],
    base: ["bg-emerald-600", "dark:bg-emerald-800"],
    footer: "dark:bg-emerald-900",
    accent: "text-emerald-600",
  },
  amber: {
    card: ["bg-amber-50", "text-amber-700"],
    base: ["bg-amber-600", "dark:bg-amber-800"],
    footer: "dark:bg-amber-900",
    accent: "text-amber-600",
  },
  pink: {
    card: ["bg-pink-50", "text-pink-700"],
    base: ["bg-pink-600", "dark:bg-pink-800"],
    footer: "dark:bg-pink-900",
    accent: "text-pink-600",
  },
  fuchsia: {
    card: ["bg-fuchsia-50", "text-fuchsia-700"],
    base: ["bg-fuchsia-600", "dark:bg-fuchsia-800"],
    footer: "dark:bg-fuchsia-900",
    accent: "text-fuchsia-600",
  },
};

const THEME_SWITCHER = {
  indigo: "#4338ca",
  red: "#b91c1c",
  teal: "#0f766e",
  green: "#15803d",
  orange: "#c2410c",
  yellow: "#a16207",
  cyan: "#0e7490",
  blue: "#1d4ed8",
  lime: "#4d7c0f",
  rose: "#be123c",
  violet: "#6d28d9",
  purple: "#7e22ce",
  sky: "#0369a1",
  emerald: "#047857",
  amber: "#b45309",
  pink: "#be185d",
  fuchsia: "#a21caf",
};

const validate = (): [string, Record<string, any>] => {
  const COLOR = App.theme as keyof typeof COLOR_WAY;
  const isDefined = COLOR.length;

  if (!Object.keys(COLOR_WAY).includes(COLOR) && isDefined) {
    throw new Error("Invalid theme color, please check your theme config.");
  }

  if (COLOR !== "indigo" && isDefined) {
    return [THEME_SWITCHER[COLOR], COLOR_WAY[COLOR]];
  }

  return [THEME_SWITCHER["indigo"], COLOR_WAY["indigo"]];
};

export const [ICON, THEME] = validate();
