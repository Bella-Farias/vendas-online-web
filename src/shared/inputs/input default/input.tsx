import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';
import { BoxInput, TitleInput } from './input.styles';

interface InputProps extends InputPropsAntd {
  title?: string;
  //Define que o componente pode receber uma prop "title", tipo string, e ela é opcional (por causa do ?); “A interface InputProps herda todas as propriedades que um input normal pode ter, e também pode ter uma propriedade title que é minha personalizada.
  margin?: string;
}

const Input = ({ title, margin, ...props }: InputProps) => {
  return (
    <BoxInput style={{margin}}>
      {title && <TitleInput>{title}</TitleInput>}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input;
