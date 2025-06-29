ALTER TABLE "account" RENAME TO "public.account";--> statement-breakpoint
ALTER TABLE "authenticator" RENAME TO "public.authenticator";--> statement-breakpoint
ALTER TABLE "session" RENAME TO "public.session";--> statement-breakpoint
ALTER TABLE "user" RENAME TO "public.user";--> statement-breakpoint
ALTER TABLE "verificationToken" RENAME TO "public.verificationToken";--> statement-breakpoint
ALTER TABLE "public.authenticator" DROP CONSTRAINT "authenticator_credentialID_unique";--> statement-breakpoint
ALTER TABLE "public.user" DROP CONSTRAINT "user_email_unique";--> statement-breakpoint
ALTER TABLE "public.user" DROP CONSTRAINT "user_stripeCustomerId_unique";--> statement-breakpoint
ALTER TABLE "public.account" DROP CONSTRAINT "account_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "public.authenticator" DROP CONSTRAINT "authenticator_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "public.session" DROP CONSTRAINT "session_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "public.account" ADD CONSTRAINT "public.account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId");--> statement-breakpoint
ALTER TABLE "public.authenticator" ADD CONSTRAINT "public.authenticator_userId_credentialID_pk" PRIMARY KEY("userId","credentialID");--> statement-breakpoint
ALTER TABLE "public.verificationToken" ADD CONSTRAINT "public.verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token");--> statement-breakpoint
ALTER TABLE "public.account" ADD CONSTRAINT "public.account_userId_public.user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."public.user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "public.authenticator" ADD CONSTRAINT "public.authenticator_userId_public.user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."public.user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "public.session" ADD CONSTRAINT "public.session_userId_public.user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."public.user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_account_provider_account" ON "public.account" USING btree ("provider","providerAccountId");--> statement-breakpoint
CREATE INDEX "idx_session_token" ON "public.session" USING btree ("sessionToken");--> statement-breakpoint
CREATE INDEX "idx_session_expires" ON "public.session" USING btree ("expires");--> statement-breakpoint
CREATE INDEX "idx_user_name" ON "public.user" USING btree ("name");--> statement-breakpoint
CREATE INDEX "idx_user_email_verified" ON "public.user" USING btree ("emailVerified");--> statement-breakpoint
CREATE INDEX "idx_verification_token" ON "public.verificationToken" USING btree ("token");--> statement-breakpoint
ALTER TABLE "public.authenticator" ADD CONSTRAINT "public.authenticator_credentialID_unique" UNIQUE("credentialID");--> statement-breakpoint
ALTER TABLE "public.user" ADD CONSTRAINT "public.user_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "public.user" ADD CONSTRAINT "public.user_stripeCustomerId_unique" UNIQUE("stripeCustomerId");