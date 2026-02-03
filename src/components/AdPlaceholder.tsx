"use client";

interface AdPlaceholderProps {
    className?: string;
    size?: "small" | "medium" | "large";
}

export default function AdPlaceholder({ className = "", size = "medium" }: AdPlaceholderProps) {
    const sizeStyles = {
        small: "h-16",
        medium: "h-24",
        large: "h-32",
    };

    return (
        <div
            className={`ad-placeholder ${sizeStyles[size]} ${className}`}
        >
            <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                </svg>
                <span className="text-sm">広告スペース</span>
            </div>
        </div>
    );
}
