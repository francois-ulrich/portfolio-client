import React from 'react';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';

import {GET_CATS} from './apollo/queries';

const CatsViewer = () => (
  <Query query={GET_CATS}>
    {({ loading, data }) => !loading && (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.cats.map(cat => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </Query>
);

export default CatsViewer;