export const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROJECTS: "/projects",
  JOBS: "/jobs",
  MESSAGES: "/messages",
  NETWORK: "/network",
  PROFILE: (id: string) => `/profile/${id}`,
};
