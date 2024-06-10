import { execSync } from "child_process";

export function getBravePath(): string {
  switch (process.platform) {
    case "win32":
      return "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";
    case "darwin":
      return "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";
    case "linux":
      return execSync("which brave-browser").toString().trim();
    default:
      throw new Error("Unsupported platform: " + process.platform);
  }
}
