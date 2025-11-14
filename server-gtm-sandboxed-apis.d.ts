// server-gtm-sandboxed-apis.d-ts
// A complete declaration file for the Google Tag Manager Server Custom Template Sandboxed JavaScript APIs.
// This file enables IntelliSense (autocompletion and hover documentation) in editors like VS Code.

// --------------------------------------------------------------------------
// Interfaces for Complex Return Types & Parameters
// --------------------------------------------------------------------------

/**
 * A representation of a Sandboxed JS Promise, which is functionally equivalent to a JavaScript Promise.
 * Note: A Sandboxed JS promise times out (rejects) after five seconds if it has not resolved.
 */
interface GtmPromise<T> {
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
  ): GtmPromise<TResult1 | TResult2>;

  catch<TResult = never>(
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
  ): GtmPromise<T | TResult>;

  finally(onfinally?: (() => void) | undefined | null): GtmPromise<T>;
}

// --------------------------------------------------------------------------
// API Module Declarations
// --------------------------------------------------------------------------

declare module 'addEventCallback' {
  /**
   * Registers a callback function that will be invoked at the end of an event, after all tags for the event have executed.
   * The eventData object's tags array will include the tag's ID, status, execution time, and any additional tag metadata configured on the tag.
   * @param callback The function to invoke at the end of the event.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#addeventcallback Google Tag Manager APIs Reference}
   */
  function addEventCallback(
    callback: (
      containerId: string,
      eventData: { tags: { id: string; status: string; executionTime: number }[] }
    ) => void
  ): void;
  export = addEventCallback;
}

declare module 'addMessageListener' {
  /**
   * Adds a function that listens for a message of a particular type. When a message of that type is sent, the callback will be run synchronously.
   * @param messageType The message type to listen for. If the value is not a string, it will be coerced to a string.
   * @param callback The callback to run when a message of the applicable message type is sent. It receives the messageType and the message object.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#addmessagelistener Google Tag Manager APIs Reference}
   */
  function addMessageListener(
    messageType: string,
    callback: (messageType: string, message: object) => void
  ): void;
  export = addMessageListener;
}

declare module 'callLater' {
  /**
   * Schedules a call to a function to occur asynchronously, after the current code returns. This is equivalent to setTimeout(<function>, 0).
   * @param func The function to call.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#calllater Google Tag Manager APIs Reference}
   */
  function callLater(func: () => void): void;
  export = callLater;
}

declare module 'claimRequest' {
  /**
   * In a client, claims the incoming request. Once a request is claimed, the container does not run additional clients.
   * This API throws an exception if called in a tag or variable, or if called after the client returns (e.g., in an async callback).
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#claimrequest Google Tag Manager APIs Reference}
   */
  function claimRequest(): void;
  export = claimRequest;
}

declare module 'computeEffectiveTldPlusOne' {
  /**
   * Returns the effective top-level domain + 1 (eTLD+1) of the given domain or URL, computed against the Public Suffix List.
   * @param domainOrUrl A domain or URL on which to compute the eTLD+1.
   * @returns The eTLD+1 string. Returns a blank string if the argument is not a valid domain or URL. Returns the argument unaltered if it is null/undefined or if the suffix list cannot be fetched.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#computeeffectivetldplusone Google Tag Manager APIs Reference}
   */
  function computeEffectiveTldPlusOne(domainOrUrl: string): string;
  export = computeEffectiveTldPlusOne;
}

declare module 'createRegex' {
  /**
   * Creates a new regex instance using an Re2 implementation and returns it wrapped in an object.
   * Requires server Docker image version 2.0.0 or later.
   * @param pattern Text of the regular expression.
   * @param flags An optional string containing flags. 'g' (global) and 'i' (ignore case) are supported. All other characters are silently ignored.
   * @returns An object wrapping the regex. Returns null if the regex is invalid or Re2 is unavailable on the server.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#createregex Google Tag Manager APIs Reference}
   */
  function createRegex(pattern: string, flags?: string): object | null;
  export = createRegex;
}

declare module 'decodeUri' {
  /**
   * Decodes any encoded characters in the provided URI.
   * @param encoded_uri A URI that has been encoded by encodeUri() or by other means.
   * @returns A string that represents the decoded URI. Returns undefined when provided with invalid input.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#decodeuri Google Tag Manager APIs Reference}
   */
  function decodeUri(encoded_uri: string): string | undefined;
  export = decodeUri;
}

declare module 'decodeUriComponent' {
  /**
   * Decodes any encoded characters in the provided URI component.
   * @param encoded_uri_component A URI component that has been encoded by encodeUriComponent() or by other means.
   * @returns A string that represents the decoded URI component. Returns undefined when given invalid input.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#decodeuricomponent Google Tag Manager APIs Reference}
   */
  function decodeUriComponent(encoded_uri_component: string): string | undefined;
  export = decodeUriComponent;
}

declare module 'encodeUri' {
  /**
   * Returns an encoded Uniform Resource Identifier (URI) by escaping special characters.
   * @param uri A complete URI.
   * @returns A string that represents the provided string encoded as a URI.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#encodeuri Google Tag Manager APIs Reference}
   */
  function encodeUri(uri: string): string;
  export = encodeUri;
}

declare module 'encodeUriComponent' {
  /**
   * Returns an encoded Uniform Resource Identifier (URI) component by escaping special characters.
   * @param str A component of a URI.
   * @returns A string that represents the provided string encoded as a URI component.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#encodeuricomponent Google Tag Manager APIs Reference}
   */
  function encodeUriComponent(str: string): string;
  export = encodeUriComponent;
}

declare module 'extractEventsFromMpv1' {
  /**
   * Translates an incoming Measurement Protocol V1 request into a list of events in Unified Schema format.
   * @returns The list of extracted events. Throws an error if the request is not in the correct format.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#extracteventsfrommpv1 Google Tag Manager APIs Reference}
   */
  function extractEventsFromMpv1(): object[];
  export = extractEventsFromMpv1;
}

declare module 'extractEventsFromMpv2' {
  /**
   * Translates an incoming Measurement Protocol V2 request into a list of events in Unified Schema format.
   * @returns The list of extracted events. Throws an error if the request is not in the correct format.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#extracteventsfrommpv2 Google Tag Manager APIs Reference}
   */
  function extractEventsFromMpv2(): object[];
  export = extractEventsFromMpv2;
}

declare module 'fromBase64' {
  /**
   * Decodes a base64-encoded string.
   * @param base64EncodedString Base64 encoded string.
   * @returns The decoded string. Returns undefined if the input is invalid.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#frombase64 Google Tag Manager APIs Reference}
   */
  function fromBase64(base64EncodedString: string): string | undefined;
  export = fromBase64;
}

declare module 'generateRandom' {
  /**
   * Returns a random number (integer) within the given range.
   * @param min Minimum potential value of the returned integer (inclusive).
   * @param max Maximum potential value of the returned integer (inclusive).
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#generaterandom Google Tag Manager APIs Reference}
   */
  function generateRandom(min: number, max: number): number;
  export = generateRandom;
}

declare module 'getAllEventData' {
  /**
   * Returns a copy of the event data.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getalleventdata Google Tag Manager APIs Reference}
   */
  function getAllEventData(): object;
  export = getAllEventData;
}

declare module 'getClientName' {
  /**
   * Returns a string that contains the name of the current client.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getclientname Google Tag Manager APIs Reference}
   */
  function getClientName(): string;
  export = getClientName;
}

declare module 'getContainerVersion' {
  /**
   * Returns an object containing data about the current container.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getcontainerversion Google Tag Manager APIs Reference}
   */
  function getContainerVersion(): {
    containerId: string;
    debugMode: boolean;
    environmentName: string;
    environmentMode: boolean;
    previewMode: boolean;
    version: string;
  };
  export = getContainerVersion;
}

declare module 'getCookieValues' {
  /**
   * Returns an array containing the values of all cookies with the given name.
   * @param name Name of the cookie.
   * @param noDecode If true, the cookie values will not be decoded before being returned. Defaults to false.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getcookievalues Google Tag Manager APIs Reference}
   */
  function getCookieValues(name: string, noDecode?: boolean): string[];
  export = getCookieValues;
}

declare module 'getEventData' {
  /**
   * Returns a copy of the value at the given path in the event data.
   * @param keyPath The path of the key, where path components are separated by dots. The path components can be keys in an object or indices in an array.
   * @returns The value at the path. Returns undefined if there is no event data or if there is no value at the given path.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#geteventdata Google Tag Manager APIs Reference}
   */
  function getEventData(keyPath: string): any;
  export = getEventData;
}

declare module 'getGoogleAuth' {
  /**
   * Returns an authorization object that when used with sendHttpRequest, will include an authorization header for Google Cloud APIs.
   * This API uses Application Default Credentials to automatically find credentials from the server environment.
   * @param scopes An object containing an array of OAuth 2.0 Google API scopes to request access for.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getgoogleauth Google Tag Manager APIs Reference}
   */
  function getGoogleAuth(scopes: { scopes: string[] }): object;
  export = getGoogleAuth;
}

declare module 'getGoogleScript' {
  /**
   * Retrieves a resource from a predetermined set of Google scripts, and returns a promise with the script and associated caching metadata.
   * @param script The name of the script. Supported scripts are 'ANALYTICS', 'GTAG', and 'GTM'.
   * @param options Optional request options: 'id' (gtag/gtm id), 'debug' (truthy for debug version), 'timeout' (in ms).
   * @returns A {@link GtmPromise} that will resolve to an object containing 'script' and 'metadata' keys. If the request fails, the promise will reject with a 'reason' key.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getgooglescript Google Tag Manager APIs Reference}
   */
  function getGoogleScript(
    script: 'ANALYTICS' | 'GTAG' | 'GTM',
    options?: { id?: string; debug?: any; timeout?: number }
  ): GtmPromise<{ script: string; metadata: object }>;
  export = getGoogleScript;
}

declare module 'getRemoteAddress' {
  /**
   * Returns a string representation of the IP address where the request originated by reading request headers such as 'Forwarded' and 'X-Forwarded-For'.
   * This is a best-effort attempt and cannot guarantee accuracy.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getremoteaddress Google Tag Manager APIs Reference}
   */
  function getRemoteAddress(): string;
  export = getRemoteAddress;
}

declare module 'getRequestBody' {
  /**
   * Returns the request body as a string, if present, or undefined otherwise.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getrequestbody Google Tag Manager APIs Reference}
   */
  function getRequestBody(): string | undefined;
  export = getRequestBody;
}

declare module 'getRequestHeader' {
  /**
   * Returns the value of the named request header as a string, if present, or undefined otherwise. If the header is repeated, the returned values are joined together with ', '.
   * @param headerName The header name. This value is case-insensitive.
   * @returns The header value, or undefined if not found.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getrequestheader Google Tag Manager APIs Reference}
   */
  function getRequestHeader(headerName: string): string | undefined;
  export = getRequestHeader;
}

declare module 'getRequestMethod' {
  /**
   * Returns the request method, e.g. 'GET' or 'POST', as a string.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getrequestmethod Google Tag Manager APIs Reference}
   */
  function getRequestMethod(): string;
  export = getRequestMethod;
}

declare module 'getRequestPath' {
  /**
   * Returns the request path without the query string. Automatically strips the Server container URL prefix from the path.
   * For example, if Server container URL is 'https://example.com/analytics' and the request path is '/analytics/foo', this returns '/foo'.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getrequestpath Google Tag Manager APIs Reference}
   */
  function getRequestPath(): string;
  export = getRequestPath;
}

declare module 'getRequestQueryParameter' {
  /**
   * Returns the decoded value of the named query string parameter as a string.
   * @param name The query parameter name.
   * @returns The parameter value. Returns undefined if the parameter is not present. If the parameter is repeated, the first value that appears in the query string will be returned.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getrequestqueryparameter Google Tag Manager APIs Reference}
   */
  function getRequestQueryParameter(name: string): string | undefined;
  export = getRequestQueryParameter;
}

declare module 'getRequestQueryParameters' {
  /**
   * Returns the incoming HTTP request's query parameters as an object that maps query parameter names to the corresponding value or values. The parameter names and values are decoded.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getrequestqueryparameters Google Tag Manager APIs Reference}
   */
  function getRequestQueryParameters(): { [key: string]: string | string[] };
  export = getRequestQueryParameters;
}

declare module 'getRequestQueryString' {
  /**
   * Returns the request query as a string, without the leading question mark.
   * @returns The query string, or an empty string if the request URL does not include a query string.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#getrequestquerystring Google Tag Manager APIs Reference}
   */
  function getRequestQueryString(): string;
  export = getRequestQueryString;
}

declare module 'getTimestamp' {
  /**
   * @deprecated Prefer getTimestampMillis.
   * Returns a number that represents the current time in milliseconds since Unix epoch.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#gettimestamp Google Tag Manager APIs Reference}
   */
  function getTimestamp(): number;
  export = getTimestamp;
}

declare module 'getTimestampMillis' {
  /**
   * Returns a number that represents the current time in milliseconds since Unix epoch, as returned by Date.now().
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#gettimestampmillis Google Tag Manager APIs Reference}
   */
  function getTimestampMillis(): number;
  export = getTimestampMillis;
}

declare module 'getType' {
  /**
   * Returns a string describing the given value's type.
   * @param value Input value.
   * @returns 'string', 'number', 'boolean', 'null', 'undefined', 'array', 'object', or 'function'.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#gettype Google Tag Manager APIs Reference}
   */
  function getType(
    value: any
  ): 'string' | 'number' | 'boolean' | 'null' | 'undefined' | 'array' | 'object' | 'function';
  export = getType;
}

declare module 'hasMessageListener' {
  /**
   * Returns true if a message listener has been added for the given message type. Returns false otherwise.
   * @param messageType The message type to check for.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#hasmessagelistener Google Tag Manager APIs Reference}
   */
  function hasMessageListener(messageType: string): boolean;
  export = hasMessageListener;
}

declare module 'hmacSha256' {
  /**
   * Calculates an encoded signature using Hash-based Message Authentication Code (HMAC) with SHA-256. Defaults to base64url encoding.
   * To use this API, set the SGTM_CREDENTIALS environment variable on the server to the path of a UTF-8 encoded JSON key file.
   * @param data The data to compute the HMAC value.
   * @param keyId A key id from the JSON key file referring to the key to use.
   * @param options Optional API configuration.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#hmacsha256 Google Tag Manager APIs Reference}
   */
  function hmacSha256(
    data: string,
    keyId: string,
    options?: { outputEncoding?: 'hex' | 'base64' | 'base64url' }
  ): string;
  export = hmacSha256;
}

declare module 'isRequestMpv1' {
  /**
   * Returns true if the incoming request is a Measurement Protocol V1 request, or false otherwise.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#isrequestmpv1 Google Tag Manager APIs Reference}
   */
  function isRequestMpv1(): boolean;
  export = isRequestMpv1;
}

declare module 'isRequestMpv2' {
  /**
   * Returns true if the incoming request is a Measurement Protocol V2 request, or false otherwise.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#isrequestmpv2 Google Tag Manager APIs Reference}
   */
  function isRequestMpv2(): boolean;
  export = isRequestMpv2;
}

declare module 'logToConsole' {
  /**
   * Logs its argument(s) to the console. These logs are visible within Logs Explorer in the Google Cloud Console.
   * From Logs Explorer run the query `logName =~ "stdout"` to see log entries created by this API.
   * @param args One or more arguments, each of which is converted to a string, if necessary, and logged.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#logtoconsole Google Tag Manager APIs Reference}
   */
  function logToConsole(...args: any[]): void;
  export = logToConsole;
}

declare module 'makeInteger' {
  /**
   * Converts the given value to a number (integer).
   * @param value The value to convert.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#makeinteger Google Tag Manager APIs Reference}
   */
  function makeInteger(value: any): number;
  export = makeInteger;
}

declare module 'makeNumber' {
  /**
   * Converts the given value to a number.
   * @param value The value to convert.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#makenumber Google Tag Manager APIs Reference}
   */
  function makeNumber(value: any): number;
  export = makeNumber;
}

declare module 'makeString' {
  /**
   * Returns the given value as a string.
   * @param value The value to convert.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#makestring Google Tag Manager APIs Reference}
   */
  function makeString(value: any): string;
  export = makeString;
}

declare module 'makeTableMap' {
  /**
   * Converts a simple table object with two columns to a Map. This is used to change a SIMPLE_TABLE template field into a more manageable format.
   * @param tableObj The table object to convert. It's a list of maps where each Map represents a row.
   * @param keyColumnName Name of the column whose values will become keys in the converted Map.
   * @param valueColumnName Name of the column whose values will become values in the converted Map.
   * @returns An Object with the converted Map of key-value pairs, or null.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#maketablemap Google Tag Manager APIs Reference}
   */
  function makeTableMap(
    tableObj: object[],
    keyColumnName: string,
    valueColumnName: string
  ): object | null;
  export = makeTableMap;
}

declare module 'parseUrl' {
  /**
   * Returns an object that contains all of a given URL's component parts, similar to the URL object.
   * @param url The full url that will be parsed.
   * @returns An object with the URL components if the URL is valid, otherwise `undefined`. For properly formatted URLs, fields not present will be an empty string or object.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#parseurl Google Tag Manager APIs Reference}
   */
  function parseUrl(url: string):
    | {
        href: string;
        origin: string;
        protocol: string;
        username: string;
        password: string;
        host: string;
        hostname: string;
        port: string;
        pathname: string;
        search: string;
        searchParams: { [key: string]: string | string[] };
        hash: string;
      }
    | undefined;
  export = parseUrl;
}

declare module 'returnResponse' {
  /**
   * Flushes the response that was previously set by other templates using APIs that modify the response (e.g. setCookie, setResponseBody). Defaults to HTTP 200, empty body, and no headers.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#returnresponse Google Tag Manager APIs Reference}
   */
  function returnResponse(): void;
  export = returnResponse;
}

declare module 'runContainer' {
  /**
   * Runs the container logic (variables, triggers, tags) in the scope of an event. If called during container execution, the container is run again.
   * @param event The event parameters.
   * @param onComplete A callback that is invoked after all the tags finish firing. Receives a `bindToEvent` function.
   * @param onStart A callback that is invoked immediately, before the tags start firing. Receives a `bindToEvent` function.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#runcontainer Google Tag Manager APIs Reference}
   */
  function runContainer(
    event: object,
    onComplete?: (bindToEvent: Function) => void,
    onStart?: (bindToEvent: Function) => void
  ): void;
  export = runContainer;
}

declare module 'sendEventToGoogleAnalytics' {
  /**
   * Sends a single event using Common Event Data to Google Analytics and returns a promise.
   * @param event The event in Unified Schema format.
   * @returns A {@link GtmPromise} that resolves to an object with a 'location' key (if present) or rejects to an object with a 'reason' key.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#sendeventtogoogleanalytics Google Tag Manager APIs Reference}
   */
  function sendEventToGoogleAnalytics(event: object): GtmPromise<{ location?: string }>;
  export = sendEventToGoogleAnalytics;
}

declare module 'sendHttpGet' {
  /**
   * Makes an HTTP GET request to the specified URL, and returns a promise that resolves with the result.
   * @param url The requested URL.
   * @param options Optional request options: 'headers', 'timeout' (in ms, defaults to 15000), 'authorization' object from getGoogleAuth.
   * @returns A {@link GtmPromise} that resolves to an object with 'statusCode', 'headers', and 'body'. Rejects with `{reason: 'failed'}` or `{reason: 'timed_out'}`.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#sendhttpget Google Tag Manager APIs Reference}
   */
  function sendHttpGet(
    url: string,
    options?: { headers?: { [key: string]: string }; timeout?: number; authorization?: object }
  ): GtmPromise<{ statusCode: number; headers: object; body: string }>;
  export = sendHttpGet;
}

declare module 'sendHttpRequest' {
  /**
   * Makes an HTTP request to the specified URL, and returns a promise that resolves with the response.
   * @param url The requested URL.
   * @param options Optional request options: 'method' (defaults to GET), 'headers', 'timeout' (in ms, defaults to 15000), 'authorization' object from getGoogleAuth.
   * @param body Optional request body.
   * @returns A {@link GtmPromise} that resolves to an object with 'statusCode', 'headers', and 'body'. Rejects with `{reason: 'failed'}` or `{reason: 'timed_out'}`.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#sendhttprequest Google Tag Manager APIs Reference}
   */
  function sendHttpRequest(
    url: string,
    options?: {
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
      headers?: { [key: string]: string };
      timeout?: number;
      authorization?: object;
    },
    body?: string
  ): GtmPromise<{ statusCode: number; headers: object; body: string }>;
  export = sendHttpRequest;
}

declare module 'sendMessage' {
  /**
   * Sends a message of the specified type to a registered listener. This can be used to send messages from a tag back to the client.
   * @param messageType The message type to send. If not a string, it will be coerced to a string.
   * @param message The message to send. If not an object, the API will do nothing.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#sendmessage Google Tag Manager APIs Reference}
   */
  function sendMessage(messageType: string, message: object): void;
  export = sendMessage;
}

declare module 'sendPixelFromBrowser' {
  /**
   * Sends a command to the browser to load the provided URL as an <img> tag. This is supported in GA4 and GA Event web tags.
   * @param url The url to send to the browser.
   * @returns Returns false if the incoming request does not support the command protocol, or if the response has already been flushed. Otherwise returns true.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#sendpixelfrombrowser Google Tag Manager APIs Reference}
   */
  function sendPixelFromBrowser(url: string): boolean;
  export = sendPixelFromBrowser;
}

declare module 'setCookie' {
  /**
   * Sets or deletes a cookie with the specified options. Note that returnResponse() must be called for the response to be sent.
   * @param name The cookie name (case-insensitive).
   * @param value The cookie value.
   * @param options Optional cookie attributes. For 'domain', the special value 'auto' will compute the host from request headers. If 'expires' and 'max-age' are set, 'max-age' has precedence.
   * @param noEncode If true, the cookie value will not be encoded. Defaults to false.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#setcookie Google Tag Manager APIs Reference}
   */
  function setCookie(
    name: string,
    value: string,
    options?: {
      domain?: string | 'auto';
      expires?: string;
      fallbackDomain?: string;
      httpOnly?: boolean;
      'max-age'?: number;
      path?: string;
      secure?: boolean;
      sameSite?: 'strict' | 'lax' | 'none';
    },
    noEncode?: boolean
  ): void;
  export = setCookie;
}

declare module 'setPixelResponse' {
  /**
   * Sets response body to a 1x1 GIF, sets Content-Type to 'image/gif', sets non-caching headers, and sets status to 200. Note that returnResponse() must be called.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#setpixelresponse Google Tag Manager APIs Reference}
   */
  function setPixelResponse(): void;
  export = setPixelResponse;
}

declare module 'setResponseBody' {
  /**
   * Sets the response body. Note that returnResponse() must be called for the response to be sent.
   * @param body The value to set as the response body.
   * @param encoding The character encoding of the response body (defaults to 'utf8').
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#setresponsebody Google Tag Manager APIs Reference}
   */
  function setResponseBody(
    body: string,
    encoding?: 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'base64' | 'latin1' | 'binary' | 'hex'
  ): void;
  export = setResponseBody;
}

declare module 'setResponseHeader' {
  /**
   * Sets a header in the response that will be returned. If a header with this name was previously set, it will be overwritten. Note that returnResponse() must be called.
   * @param name The header name (case-insensitive, will be lowercased).
   * @param value The header value. If null or undefined, this clears the named header.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#setresponseheader Google Tag Manager APIs Reference}
   */
  function setResponseHeader(name: string, value: string | undefined | null): void;
  export = setResponseHeader;
}

declare module 'setResponseStatus' {
  /**
   * Sets the HTTP status code of the response that will be returned. Note that returnResponse() must be called.
   * @param statusCode The HTTP status code to be returned.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#setresponsestatus Google Tag Manager APIs Reference}
   */
  function setResponseStatus(statusCode: number): void;
  export = setResponseStatus;
}

declare module 'sha256' {
  /**
   * Calculates the SHA-256 digest of the input and invokes a callback with the digest.
   * @param input The string to hash.
   * @param onSuccess Called with the resulting digest, encoded in base64 unless specified otherwise in options.
   * @param options Optional options object to specify the output encoding.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#sha256 Google Tag Manager APIs Reference}
   */
  function sha256(
    input: string,
    onSuccess: (digest: string) => void,
    options?: { outputEncoding?: 'base64' | 'hex' }
  ): void;
  export = sha256;
}

declare module 'sha256Sync' {
  /**
   * Calculates and returns the SHA-256 digest of the input.
   * @param input The string to hash.
   * @param options Optional options object to specify the output encoding.
   * @returns The SHA-256 digest, encoded in base64 unless specified otherwise in options.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#sha256sync Google Tag Manager APIs Reference}
   */
  function sha256Sync(input: string, options?: { outputEncoding?: 'base64' | 'hex' }): string;
  export = sha256Sync;
}

declare module 'templateDataStorage' {
  /**
   * An object with methods for accessing template data storage, which allows data to be shared across executions of a single template.
   * Note: Requests from debug/preview mode or the template editor use a temporary storage that only persists for the lifetime of the request.
   * Note: This API does not serialize/deserialize data into strings like the Web Storage API.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#templatedatastorage Google Tag Manager APIs Reference}
   */
  const templateDataStorage: {
    /**
     * Returns a copy of the value stored for the given key, or null if nothing is stored with that key.
     * @param key The key of the item to retrieve.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#templatedatastorage Google Tag Manager APIs Reference}
     */
    getItemCopy(key: string): any;
    /**
     * Stores a copy of the value for the given key (or removes the data stored for the given key if the input value is null).
     * @param key The key of the item to store.
     * @param value The value to store.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#templatedatastorage Google Tag Manager APIs Reference}
     */
    setItemCopy(key: string, value: any): void;
    /**
     * Removes the value stored for the given key, if present.
     * @param key The key of the item to remove.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#templatedatastorage Google Tag Manager APIs Reference}
     */
    removeItem(key: string): void;
    /**
     * Deletes all values stored for the current template.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#templatedatastorage Google Tag Manager APIs Reference}
     */
    clear(): void;
  };
  export = templateDataStorage;
}

declare module 'testRegex' {
  /**
   * Tests a string against a regex created via createRegex API.
   * @param regex The regex to test against, returned from createRegex API. A regex with the global flag is stateful.
   * @param string Test string to test.
   * @returns Returns true if the regex matches, false otherwise.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#testregex Google Tag Manager APIs Reference}
   */
  function testRegex(regex: object, string: string): boolean;
  export = testRegex;
}

declare module 'toBase64' {
  /**
   * Encodes a string as base64 or base64url.
   * @param input String to encode.
   * @param options Optional API configuration. Set { urlEncoding: true } for base64url format. Defaults to base64.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#tobase64 Google Tag Manager APIs Reference}
   */
  function toBase64(input: string, options?: { urlEncoding?: boolean }): string;
  export = toBase64;
}

// --------------------------------------------------------------------------
// API Modules
// --------------------------------------------------------------------------

declare module 'BigQuery' {
  /**
   * An object that provides BigQuery functions.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#bigquery Google Tag Manager APIs Reference}
   */
  const BigQuery: {
    /**
     * Allows writing data into a BigQuery table.
     * @param connectionInfo Defines information required to connect to a BigQuery table (projectId, datasetId, tableId).
     * @param rows The rows to insert into the table.
     * @param options Optional request options: 'ignoreUnknownValues' and 'skipInvalidRows'.
     * @returns A {@link GtmPromise} that resolves upon a successful insertion or rejects upon an error.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#bigquery Google Tag Manager APIs Reference}
     */
    insert(
      connectionInfo: { projectId?: string; datasetId: string; tableId: string },
      rows: object[],
      options?: { ignoreUnknownValues?: boolean; skipInvalidRows?: boolean }
    ): GtmPromise<void>;
  };
  export = BigQuery;
}

declare module 'Firestore' {
  /**
   * An object that provides Firestore functions. Supports only Firestore in Native mode and the default database.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#firestore Google Tag Manager APIs Reference}
   */
  const Firestore: {
    /**
     * Reads data from a Firestore document and returns a promise. Caches its response for the duration of the container execution by default.
     * @param path The path to the document or collection. Must not start or end with a '/'.
     * @param options Optional request options: 'projectId', 'disableCache', 'transaction'.
     * @returns A {@link GtmPromise} that resolves to an object with 'id' and 'data'. Rejects if the document does not exist.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#firestoreread Google Tag Manager APIs Reference}
     */
    read(
      path: string,
      options?: { projectId?: string; disableCache?: boolean; transaction?: string }
    ): GtmPromise<{ id: string; data: object }>;
    /**
     * Writes data to a Firestore document or collection. If the document does not exist, it will be created.
     * @param path The path to the document or collection. Must not start or end with a '/'.
     * @param input The value to write into the document.
     * @param options Optional request options: 'projectId', 'merge' (defaults to false, overriding the document), 'transaction'.
     * @returns A {@link GtmPromise} that resolves to the ID of the document added or modified.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#firestorewrite Google Tag Manager APIs Reference}
     */
    write(
      path: string,
      input: object,
      options?: { projectId?: string; merge?: boolean; transaction?: string }
    ): GtmPromise<string>;
    /**
     * Queries the given collection and returns a promise that resolves to an array of Firestore documents. Caches its response by default.
     * @param collection The path to the collection. Must not start or end with a '/'.
     * @param queryConditions An array of query conditions. Each condition is an array of [key, operator, expectedValue].
     * @param options Optional request options: 'projectId', 'disableCache', 'limit' (defaults to 5), 'transaction'.
     * @returns A {@link GtmPromise} that resolves to an array of documents. Resolves to an empty array if no documents match.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#firestorequery Google Tag Manager APIs Reference}
     */
    query(
      collection: string,
      queryConditions: any[][],
      options?: { projectId?: string; disableCache?: boolean; limit?: number; transaction?: string }
    ): GtmPromise<{ id: string; data: object }[]>;
    /**
     * Allows the user to atomically read and write from Firestore. The transaction will be retried up to two times on conflict.
     * @param callback A callback that's invoked with a transaction ID. This callback must return a promise.
     * @param options Optional request options: 'projectId'.
     * @returns A {@link GtmPromise} that resolves to an array of document IDs for each write operation if successful, and rejects with an error if it fails.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#firestoreruntransaction Google Tag Manager APIs Reference}
     */
    runTransaction(
      callback: (transaction: string) => GtmPromise<any>,
      options?: { projectId?: string }
    ): GtmPromise<string[]>;
  };
  export = Firestore;
}

declare module 'JSON' {
  /**
   * An object that provides JSON functions.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#json Google Tag Manager APIs Reference}
   */
  const JSON: {
    /**
     * Parses a JSON string, constructing the JavaScript value or object described by the string.
     * @param stringInput The string to parse as JSON.
     * @returns The JavaScript value or object. Returns undefined if the string cannot be parsed as JSON.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#json Google Tag Manager APIs Reference}
     */
    parse(stringInput: string): any;
    /**
     * Converts a JavaScript value to a JSON string.
     * @param value The value to convert.
     * @returns A JSON string representing the given value. Returns undefined if the value contains a cycle and cannot be stringified.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#json Google Tag Manager APIs Reference}
     */
    stringify(value: any): string | undefined;
  };
  export = JSON;
}

declare module 'Math' {
  /**
   * An object providing Math functions.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#math Google Tag Manager APIs Reference}
   */
  const Math: {
    /**
     * Retrieve the absolute value.
     * @param x The number.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#math Google Tag Manager APIs Reference}
     */
    abs(x: number): number;
    /**
     * Round the input up to the nearest integer.
     * @param x The number to round up.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#math Google Tag Manager APIs Reference}
     */
    ceil(x: number): number;
    /**
     * Round the input down to the nearest integer.
     * @param x The number to round down.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#math Google Tag Manager APIs Reference}
     */
    floor(x: number): number;
    /**
     * Round the input to the nearest integer.
     * @param x The number to round.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#math Google Tag Manager APIs Reference}
     */
    round(x: number): number;
    /**
     * Return the largest argument.
     * @param values The numbers to compare.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#math Google Tag Manager APIs Reference}
     */
    max(...values: number[]): number;
    /**
     * Return the smallest argument.
     * @param values The numbers to compare.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#math Google Tag Manager APIs Reference}
     */
    min(...values: number[]): number;
    /**
     * Return the first argument raised to the power of the second argument.
     * @param base The base.
     * @param exponent The exponent.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#math Google Tag Manager APIs Reference}
     */
    pow(base: number, exponent: number): number;
    /**
     * Return the square root of the argument.
     * @param x The number.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#math Google Tag Manager APIs Reference}
     */
    sqrt(x: number): number;
  };
  export = Math;
}

declare module 'Object' {
  /**
   * An object that provides Standard Library Object methods.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#object Google Tag Manager APIs Reference}
   */
  const Object: {
    /**
     * Provides the Standard Library Object.keys() behavior. Returns an array of a given object's own enumerable property names.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#object Google Tag Manager APIs Reference}
     */
    keys(obj: any): string[];
    /**
     * Provides the Standard Library Object.values() behavior. Returns an array of a given object's own enumerable property values.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#object Google Tag Manager APIs Reference}
     */
    values(obj: any): any[];
    /**
     * Provides the Standard Library Object.entries() behavior. Returns an array of a given object's own enumerable property [key, value] pairs.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#object Google Tag Manager APIs Reference}
     */
    entries(obj: any): [string, any][];
    /**
     * Provides the Standard Library Object.freeze() behavior. A frozen object can no longer be changed.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#object Google Tag Manager APIs Reference}
     */
    freeze<T>(obj: T): T;
    /**
     * Provides the Standard Library delete operator behavior. It removes the given key from the object unless the object is frozen.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#object Google Tag Manager APIs Reference}
     */
    delete(obj: any, key: string): boolean;
  };
  export = Object;
}

declare module 'Promise' {
  /**
   * An object that provides methods for interacting with promises, which are functionally equivalent to JavaScript promises.
   *
   * ---
   *
   * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#promise Google Tag Manager APIs Reference}
   */
  const Promise: {
    /**
     * Returns a promise that either resolves when all the inputs have resolved, or rejects when any of the inputs reject.
     * @param inputs An array of values or promises. If an input is not a promise, it is treated as a resolved promise.
     * @returns A {@link GtmPromise} that resolves with an array of the results from the input promises.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#promiseall Google Tag Manager APIs Reference}
     */
    all<T>(inputs: (T | GtmPromise<T>)[]): GtmPromise<T[]>;
    /**
     * Creates a promise that is functionally equivalent to a JavaScript promise.
     * @param resolver A function that is invoked with two functions -- resolve and reject. The returned promise will resolve or reject when the corresponding parameter is invoked.
     * @returns A {@link GtmPromise}.
     *
     * ---
     *
     * @see {@link https://developers.google.com/tag-platform/tag-manager/server-side/api#promisecreate Google Tag Manager APIs Reference}
     */
    create<T>(
      resolver: (
        resolve: (value: T | GtmPromise<T>) => void,
        reject: (reason?: any) => void
      ) => void
    ): GtmPromise<T>;
  };
  export = Promise;
}
