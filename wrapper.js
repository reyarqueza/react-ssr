export default function(content, preloadedState) {
  return `<!doctype html>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="/css/styles.min.css" />
  </head>
  <body>
    <main>${content}</main>
    <script>
    // WARNING: See the following for security issues around embedding JSON in HTML:
    // https://redux.js.org/recipes/server-rendering/#security-considerations
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      '\\u003c'
    )}
    </script>
    <script src="/js/bundle.js"></script>
  </body>
</html>`
}
