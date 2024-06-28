import styles from "./style.module.scss"
export default function first() {
  return (
    <footer className="h-[30vh] col-start-1 col-end-13">
      <div className={styles.container}>
        <div className={styles.item}>
          <form className={styles.form}>
            <input
              type="email"
              className={styles.field}
              placeholder="Your E-Mail Address"
            />
            <button
              type="button"
              className="btn btn--primary btn--inside uppercase"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="wrapper ">
        <div className="marquee">
          <span>AVAILABLE</span>
          <span>AVAILABLE</span>
        </div>
      </div>
    </footer>
  );
}
