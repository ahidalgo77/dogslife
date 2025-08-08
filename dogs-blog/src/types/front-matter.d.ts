declare module 'front-matter' {
  interface FrontMatterResult<T> {
    attributes: T;
    body: string;
    bodyBegin: number;
    frontmatter: string;
    markdown: string;
  }
  function fm<T = any>(input: string): FrontMatterResult<T>;
  export = fm;
}
