import { Header, Heading, ResponsiveContext } from 'grommet';
import React, { useContext } from 'react';

export default function App() {
  const size = useContext(ResponsiveContext);
  return (
    <Header justify="center" align="center" direction="column" height="small">
      <Heading level={1}>PWA with Siray</Heading>
      <Heading level={3}>Current screen size: {size}</Heading>
    </Header>
  );
}
