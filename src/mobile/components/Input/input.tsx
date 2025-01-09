import React from 'react';
import { Container, Input, Vseparator } from './styles';

const InputLogin = () => {
  return (
    <>
    <Container>
      <Input placeholder="Your e-mail or phone" placeholderTextColor="#9ca3af" />
      <Vseparator/>
      <Vseparator/>      
      <Input placeholder="Password" placeholderTextColor="#9ca3af" secureTextEntry/>
    </Container>
    </>
  );
};

export default InputLogin;