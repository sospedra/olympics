type Await<T> = T extends PromiseLike<infer U> ? Await<U> : T;

declare module "table-scraper" {
  function get(url: string): Promise<Record<string, string>[][]>
  export = { get }
}