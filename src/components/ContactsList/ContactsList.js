import React from 'react';
import { ListStyled } from './ContactsList.style';

export default function ContactsList({ children }) {
  // return <ListStyled>{children}</ListStyled>;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

{
  /* <table className={s['transaction-history']}>
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>

<tbody>
  {items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    );
  })}
</tbody>
</table> */
}
