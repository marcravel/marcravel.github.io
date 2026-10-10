export function getOptimizedImagePath(
    imagePath: string,
    variant: "full" | "thumbnail" = "full",
) {
    if (imagePath.startsWith("http")) {
        return imagePath;
    }

    const extension = imagePath.match(/\.[^.]+$/)?.[0];
    if (!extension) {
        return imagePath;
    }

    return imagePath.replace(
        new RegExp(`${extension}$`),
        variant === "thumbnail" ? "-thumb.webp" : ".webp",
    );
}
