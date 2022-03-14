import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Dashboard } from '../../components/Dashboard';

import { Container } from './styles';

export function Todo() {
  const { id, user } = useParams();

  return (
    <Container>
      <Header />
      <Dashboard user={{ user, id }} />
    </Container>
  );
}
