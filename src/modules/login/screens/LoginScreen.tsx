import { useState } from 'react';
import Button from '../../../shared/buttons/button default/Button';
import Input from '../../../shared/inputs/input default/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [username /*É o valor do State */, setUserName /*Função que vai alterar o valor do State */] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    //A const "handleUserName" foi criada para atualizar o State "username" toda vez que o usuario digitar algo no input. Se não fizer isso o React não sabe o que está sendo digitado, consequentimente não conseguindo usar o valor digitado depois (como por exemplo para fazer login, validar campos, etc).
    setUserName(event.target.value);
    //Atualiza o valor do "usernam" com o que foi digitado.
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin>LOGIN</TitleLogin>
          <Input title="USUÁRIO:" margin="32px 0px 0px" onChange={handleUserName} value={username} /*O valor do input será sempre o que estiver no State "username"*/ />
          <Input type='password' title="SENHA:" margin="32px 0px 0px" onChange={handlePassword} value={password} />
          <Button type="primary" margin="64px 0px 16px 0px">
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
