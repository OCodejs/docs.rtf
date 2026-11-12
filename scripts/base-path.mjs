export function createBasePathTools(hostname, pathname) {
  const isDocsPagesHost = hostname === "ocodejs.co";
  const isDocsSubpath = pathname === "/docs.rtf" || pathname.startsWith("/docs.rtf/");
  const basePath = isDocsPagesHost && isDocsSubpath ? "/docs.rtf" : "";

  function appPath(path) {
    if (!basePath) return path;
    if (path === "/") return basePath + "/";
    return basePath + (path.startsWith("/") ? path : "/" + path);
  }

  function applyBaseLinks(root = document) {
    if (!basePath) return;
    root.querySelectorAll('a[href^="/"]').forEach(anchor => {
      const href = anchor.getAttribute("href");
      if (href === basePath || href.startsWith(basePath + "/")) return;
      anchor.setAttribute("href", appPath(href));
    });
  }

  return { basePath, appPath, applyBaseLinks };
}
