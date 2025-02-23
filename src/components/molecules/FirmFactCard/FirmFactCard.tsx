import React from "react";
import styles from "./FirmFactCard.module.scss";

interface FirmFactCardProps {
    variant: "default" | "border";
    children: React.ReactNode;
}

const FirmFactCard = ({ variant, children }: FirmFactCardProps) => {
    return <div className={`%{styles.card} ${styles[variant]}`}>{children}</div>
};

export default FirmFactCard;