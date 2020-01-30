let originalTitle;

export function updateDocumentTitleWithErrors(count) {
  originalTitle = document.title.replace(/\(\d errors\) - /, "");

  document.title = `(${count} errors) - ` + originalTitle;
}

export function resetDocumentTitle() {
  if (originalTitle) {
    document.title = originalTitle;
  }
}
