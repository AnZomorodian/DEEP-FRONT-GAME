import { GameEnv } from "./Config";
import { DefaultServerConfig } from "./DefaultConfig";
import { Env } from "./Env";

export const selfHostedConfig = new (class extends DefaultServerConfig {
  env(): GameEnv {
    return GameEnv.SelfHosted;
  }

  numWorkers(): number {
    const n = parseInt(Env.NUM_WORKERS ?? "4", 10);
    return isNaN(n) || n < 1 ? 4 : n;
  }

  jwtAudience(): string {
    return "localhost";
  }

  turnstileSiteKey(): string {
    return "1x00000000000000000000AA";
  }

  turnstileSecretKey(): string {
    return "1x0000000000000000000000000000000AA";
  }

  adminToken(): string {
    return Env.ADMIN_TOKEN ?? "CHANGE_ME_ADMIN_TOKEN";
  }

  apiKey(): string {
    return "";
  }

  gitCommit(): string {
    return Env.GIT_COMMIT ?? "selfhosted";
  }
})();
