import { Box, Field, Input, Button, VStack } from "@chakra-ui/react";
import { PasswordInput } from "./password-input";
import { useState } from "react";
export const FormRegister = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const handleRegister = () => {
        console.log(username, email, password, confirmPassword)
    }
  return (
    <Box color={"black"}>
      <VStack gap={4}>
        <Field.Root>
          <Field.Label>Username</Field.Label>
          <Input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Field.Root>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input placeholder="me@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field.Root>
        <Field.Root>
          <Field.Label>Password</Field.Label>
          <PasswordInput placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Field.Root>
        <Field.Root>
          <Field.Label>Confirm Password</Field.Label>
          <PasswordInput placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </Field.Root>
        <Button
          w={"100%"}
          mt={4}
          backgroundColor="#18181b"
          color="white"
          _hover={{ backgroundColor: "#08080a" }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </VStack>
    </Box>
  );
};
