export const removeLeadingSlash = (str: string | null | undefined): string => {
    if (!str) return '';
    if (str.startsWith('/')) return str.substring(1);
    return str;
}
