import Button from "../../atom/Button/Button";
import FirmFactCard from "../../molecules/FirmFactCard/FirmFactCard";
import styles from "./FirmFacts.module.scss";

const FirmFacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <Button variant="default">Learn More</Button>
        <Button variant="icon">Insights</Button>
        </div>
        <div className={styles.cards}>
            <FirmFactCard variant="default">Company Growth: 30%</FirmFactCard>
            <FirmFactCard variant="border">Revenue: $10M</FirmFactCard>
            <FirmFactCard variant="default">Employees: 500+</FirmFactCard>
        </div>
        <div className={styles.bottomRow}>
            <Button variant="icon">📊 Statistics</Button>
            <Button variant="default">View Report</Button>
        </div>
    </div>
  );
};

export default FirmFacts;