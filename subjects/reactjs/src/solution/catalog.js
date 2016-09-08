import React from 'react';

function Catalog({ items, datetime, onRefresh }) {
  return (
    <div>
      <div>Refreshed { datetime.toLocaleString() }</div>
      <button onClick={onRefresh}>Refresh</button>
      <table>
        <tbody>
        { items.map((item, idx) => (
          <tr key={ item.id } className={ (idx % 2) ? 'even' : 'odd' }>
            <td>{ idx+1 }</td>
            <td>{ item.name }</td>
          </tr> )) }
        </tbody>
      </table>
    </div>
  );
}

Catalog.propTypes = {
  items: React.PropTypes.array.isRequired,
  datetime: React.PropTypes.object.isRequired,
  onRefresh: React.PropTypes.func.isRequired
};

export default Catalog;
