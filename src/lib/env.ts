import { z, type ZodIssue, type ZodTypeAny } from 'zod';

const requiredString = z.string({ required_error: 'Required' }).min(1, 'Required');

const requiredUrl = z.string({ required_error: 'Required' }).min(1, 'Required').url('Invalid url');

const serverSchema = z.object({
  SUPABASE_SERVICE_ROLE_KEY: requiredString,
  STRIPE_SECRET_KEY: requiredString,
  STRIPE_WEBHOOK_SECRET: requiredString,
  GEMINI_API_KEY: z.string().optional(),
  STABILITY_AI_KEY: z.string().optional(),
  INNGEST_SIGNING_KEY: z.string().optional(),
  VAPID_PRIVATE_KEY: requiredString,
  DATABASE_URL: requiredUrl,
});

const clientSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: requiredUrl,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: requiredString,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: requiredString,
  NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_VAPID_PUBLIC_KEY: requiredString,
  NEXT_PUBLIC_APP_URL: requiredUrl,
});

const isServer = typeof window === 'undefined';
const isBuildPhase =
  process.env.NEXT_PHASE === 'phase-production-build' ||
  (process.env.CI === 'true' && !process.env.SUPABASE_SERVICE_ROLE_KEY);

type ParsedServerEnv = z.infer<typeof serverSchema>;

const formatIssues = (issues: ZodIssue[]) => {
  const fieldErrors = new Map<string, string>();

  for (const issue of issues) {
    const key = issue.path.join('.');

    if (!fieldErrors.has(key)) {
      fieldErrors.set(key, issue.message);
    }
  }

  return [...fieldErrors.entries()].map(([key, message]) => `${key}: ${message}`).join('\n');
};

const parseOrThrow = <TSchema extends ZodTypeAny>(schema: TSchema): z.infer<TSchema> => {
  const result = schema.safeParse(process.env);

  if (!result.success) {
    throw new Error(`❌ Invalid environment variables:\n\n${formatIssues(result.error.issues)}`);
  }

  return result.data;
};

const parseServerForBuild = (): ParsedServerEnv =>
  Object.fromEntries(
    Object.keys(serverSchema.shape).map((key) => [key, process.env[key] ?? '']),
  ) as ParsedServerEnv;

const parsedClient = parseOrThrow(clientSchema);
const parsedServer: ParsedServerEnv | null = isServer
  ? isBuildPhase
    ? parseServerForBuild()
    : parseOrThrow(serverSchema)
  : null;

const clientEnv = {
  supabaseUrl: parsedClient.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: parsedClient.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  stripePublishableKey: parsedClient.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  sentryDsn: parsedClient.NEXT_PUBLIC_SENTRY_DSN,
  posthogKey: parsedClient.NEXT_PUBLIC_POSTHOG_KEY,
  vapidPublicKey: parsedClient.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  appUrl: parsedClient.NEXT_PUBLIC_APP_URL,
};

const serverEnv = parsedServer
  ? {
      supabaseServiceRoleKey: parsedServer.SUPABASE_SERVICE_ROLE_KEY,
      stripeSecretKey: parsedServer.STRIPE_SECRET_KEY,
      stripeWebhookSecret: parsedServer.STRIPE_WEBHOOK_SECRET,
      geminiApiKey: parsedServer.GEMINI_API_KEY,
      stabilityAiKey: parsedServer.STABILITY_AI_KEY,
      inngestSigningKey: parsedServer.INNGEST_SIGNING_KEY,
      vapidPrivateKey: parsedServer.VAPID_PRIVATE_KEY,
      databaseUrl: parsedServer.DATABASE_URL,
    }
  : null;

const env = {
  client: clientEnv,
  get server() {
    if (!isServer || !serverEnv) {
      throw new Error('❌ Server env vars accessed on client');
    }

    return serverEnv;
  },
};

export { env };
export default env;
