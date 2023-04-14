export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const parsedHTML = (html: string) => {
  const isHTML = html && html.match(/(<([^>]+)>)|(&([a-z]+);)/gi);

  return isHTML ? new DOMParser().parseFromString(html, 'text/html').body.innerText : html;
};
