import styles from "./EmailList.module.css"

const EmailList = ({ list, onRemove }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.id} item={item} onRemove={onRemove} />
    ))}
  </ul>
);

const Item = ({ item, onRemove }) => (
  <li>
    <span className = {styles.address}>{item.email}</span>
    <button className={styles.btn}type="button" onClick={() => onRemove(item.id)}>
      x
    </button>
  </li>
);

export default EmailList;
