import react from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    disabled?: boolean;
    variant: "default" | "icon";
    children: React.ReactNode;
}

const Button = ({ disabled, variant, children }: ButtonProps) => {
    return <button className={`%{styles.button} ${styles[variant]}`} disabled={disabled}>{children}</button>
}

export default Button;