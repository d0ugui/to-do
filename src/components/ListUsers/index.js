import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

export function ListUsers({ users }) {
  return (
    <Container>
      <Content>
        <h1>Lista de Usuários</h1>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/todo/${user.id}/${user.name}`}>{user.name}</Link>
            </li>
          )
        })}
      </Content>
    </Container>
  );
}
