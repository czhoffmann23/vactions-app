import Main from 'screens/Main'

import { Container, Content, Header } from 'components/Container'

const Index: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Main />
      </Content>
    </Container>
  )
}

export default Index
