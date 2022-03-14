import { useState, useEffect } from 'react';

import api from '../../services/api';

import { Header } from "../../components/Header";

import { ListUsers } from '../../components/ListUsers';

export default function Home() {
  const [users, setUsers] = useState();

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('/users');
      setUsers(data);
    };

    getData();
  }, []);

  return (
    <>
      <Header />
      {users && <ListUsers users={users} />}
    </>
  );
}
