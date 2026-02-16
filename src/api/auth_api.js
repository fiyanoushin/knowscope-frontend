import userService from "./userService";

export const googleAuth = (googleToken) => {
  return userService.post("/auth/google/auth", {
    token: googleToken,
  });
};
