interface AddHashToClasses {
    styles: Record<string, string>;
    className: string | undefined;
}

/**
 * The `additionalClasses` function is designed to process class names passed
 * as props to components and map them to their corresponding hashed styles
 * from CSS modules.
 *
 * @param cls - A string containing class names passed via props, separated by spaces.
 * @param styles - An object containing styles imported from a CSS module.
 *
 * @returns A string of hashed class names separated by spaces.
 *
 * Example:
 * ```
 * const cls = "primary secondary";
 * const styles = {
 *   primary: "primary__hash123",
 *   secondary: "secondary__hash456"
 * };
 * const result = additionalClasses(cls, styles);
 * Result: "primary__hash123 secondary__hash456"
 * ```
 */

export const addHashToClasses = ({className, styles}: AddHashToClasses) => {
    const result = (className?.split(' '))?.map((style: string) => styles[style])
    return result?.join(' ');
}