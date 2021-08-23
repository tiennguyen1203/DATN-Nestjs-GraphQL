/// <reference types="node" />
import { ExecutionContext } from '@nestjs/common';
import { IncomingMessage } from 'http';
declare const GqlAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthGuard extends GqlAuthGuard_base {
    getRequest(context: ExecutionContext): IncomingMessage;
}
export {};
