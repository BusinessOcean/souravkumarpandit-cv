import { ReactNode } from "react";

interface StyleClassName {
    className?: string
}

type PropsWithChildren<P> = P & { children?: ReactNode };