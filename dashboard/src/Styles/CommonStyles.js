import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';


//button

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

//container

export const Container = styled.div`
  padding: 16px;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100vh;
`;

//flex

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap }) => gap || '8px'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
`;

//typography

export const Title = styled.h1`
  font-size: ${({ size }) => size || '44px'};
  font-weight: italic;
  margin-bottom: 6px;
  color: ${({ color }) => color || 'black'};
`;

export const Text = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1;
  color: ${({ color }) => color || 'black'};
  padding: 10px;
  margin-bottom: 0px;
`;

export const SmallText = styled.span`
  font-size: 12px;
  color: #666;
  letter-spacing:1px;
 
`;

// Input

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

//card

export const Card = styled.div`
  padding: 80px;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  background-color: #fdfefe;
`;

//devider

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eaeaea;
  margin: 16px 0;
`;

//iconWrapper

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size || '24px'};
  height: ${({ size }) => size || '24px'};
`;

//link

export const Link = styled(RouterLink)`
  color: #007BFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CentralContainer = styled.div`
  display: flex;             /* Add this to enable flexbox behavior */
  flex-direction: column;    /* Stack child elements vertically */
  justify-content: center;   /* Horizontally centers the child container */
  align-items: baseline;       /* Vertically centers the child container */
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  line-height: 1;
`;