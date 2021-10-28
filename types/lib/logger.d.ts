export class Logger {
	constructor(name: string);
	trace(...args: any[]): void;
	debug(...args: any[]): void;
	info(...args: any[]): void;
	warn(...args: any[]): void;
	error(...args: any[]): void;
	replicants(...args: any[]): void;
	static globalReconfigure(opts: LoggerOptions): void;
}

/**
 * Options used for Logger constructor
 */
export interface LoggerOptions {
	replicants?: boolean;
	console?: {
		enabled: boolean;
		timestamps: boolean;
		level: LoggerLevel;
	};
	file?: {
		enabled: boolean;
		timestamps: boolean;
		level: LoggerLevel;
		path: string;
	};
}

/**
 * NodeCG logger level enum
 */
export type LoggerLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error';
