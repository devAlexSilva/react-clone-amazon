interface IProps {
    className?: string
    display?: string
    flexDirection?: string
    alignItems?: string
    maxWidth?: string
    margin?: string
    children?: React.ReactNode
}

export const itemWrapper = ({className, children}: IProps) => {
    return (
        <div className={className}>{children}</div>
    )
}