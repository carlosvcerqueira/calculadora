import { ButtonContainer, ButtonSignalContainer } from './styles';

const Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
export default Button;

const ButtonSgn = ({label, onClick}) => {
  return (
    <ButtonSignalContainer onClick={onClick}>
      {label}
    </ButtonSignalContainer>
  )
}
  
export {ButtonSgn};