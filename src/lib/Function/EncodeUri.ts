export function EncodeUri(uri: string): string {
  // Handle dash
  uri = uri.replace("-", "--");

  // Handle underscore
  uri = uri.replace("_", "__");

  // Encode and return
  return encodeURIComponent(uri);
}
