interface IProps {
    className?: string
    fontSize?: string
    color?: string
    children: React.ReactNode
}

export const pageText = ({className, children}: IProps) => {
    return (
        <span className={className}>{children}</span>
    )
}