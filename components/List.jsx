import React from 'react';

function List() {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    setWidth(window.innerWidth);
  });
  const styles = width > 768 ? 'text-start lead' : 'text-start';
  return(
    <ul className={styles}>
      <li>
        Ensuring quality education for all students with an emphasis on career &amp; technical training
      </li>
      <li>
        Fostering safe &amp; secure schools where students needs are seen, heard &amp; met
      </li>
      <li>
        Creating pathways to success for black & brown young men through strong social-emotional supports
      </li>
    </ul>
  );
};

export default List;
