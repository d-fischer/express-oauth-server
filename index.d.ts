// Type definitions for express-oauth-server 2.0
// Project: https://github.com/oauthjs/express-oauth-server#readme
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as express from 'express';
import * as OAuth2Server from 'oauth2-server';

declare namespace ExpressOAuthServer {
	interface ServerOptions extends OAuth2Server.ServerOptions {
		useErrorHandler?: boolean;
		continueMiddleware?: boolean;
	}

	interface AuthenticateOptions extends OAuth2Server.AuthenticateOptions {
		useErrorHandler?: boolean;
	}

	interface AuthorizeOptions extends OAuth2Server.AuthorizeOptions {
		useErrorHandler?: boolean;
	}

	interface TokenOptions extends OAuth2Server.TokenOptions {
		useErrorHandler?: boolean;
	}
}

declare class ExpressOAuthServer {
	server: OAuth2Server;

	constructor(options: ExpressOAuthServer.ServerOptions);

	authenticate(options?: ExpressOAuthServer.AuthenticateOptions): (
		request: express.Request,
		response: express.Response,
		next: express.NextFunction,
	) => Promise<OAuth2Server.Token>;

	authorize(options?: ExpressOAuthServer.AuthorizeOptions): (
		request: express.Request,
		response: express.Response,
		next: express.NextFunction,
	) => Promise<OAuth2Server.AuthorizationCode>;

	token(options?: ExpressOAuthServer.TokenOptions): (
		request: express.Request,
		response: express.Response,
		next: express.NextFunction,
	) => Promise<OAuth2Server.Token>;
}

export = ExpressOAuthServer;
