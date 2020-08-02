/// <reference types="react-scripts" />

// Neutralino-specific declarations
declare var NL_VERSION: string;
declare var NL_NAME: string;
declare var NL_OS: string;
declare var NL_PORT: string;

declare namespace Neutralino {
	function init(options: any): void;
}
