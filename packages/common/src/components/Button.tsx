interface ButtonProps {
  textColor: string;
  children: React.ReactNode
}

const Button = ({textColor = 'red', children}: ButtonProps) => {
  return ( 
    <button style={{ color: textColor }}>{ children }</button>
   );
}
 
export default Button;