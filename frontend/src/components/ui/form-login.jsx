import { Box, Field, Input, Button, VStack, Alert } from "@chakra-ui/react";
import { PasswordInput } from "./password-input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const FormLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showAlert, setShowAlert] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const handleLogin = async () => {
        try {
            setIsLoading(true)
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.post("http://localhost:5000/api/user/login", { email, password }, config)
            console.log(data)
            setShowAlert(true)
            localStorage.setItem("userInfo", JSON.stringify(data))
            navigate("/chats")
            setShowAlert(false)
            setEmail("")
            setPassword("")
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
  return (
    <Box color={"black"} >
        {showAlert && (
                <Alert.Root status="success" variant="solid" mb={4}>
                    <Alert.Indicator />
                    <Alert.Title>Login successful</Alert.Title>
                </Alert.Root>
            )}
        <VStack gap={4}>
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input placeholder="me@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Field.Root>
      <Field.Root>
        <Field.Label>Password</Field.Label>
        <PasswordInput placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Field.Root>
      <Button
        w={"100%"}
        mt={4}
        backgroundColor="#18181b"
        color="white"
        _hover={{ backgroundColor: "#08080a" }}
        onClick={handleLogin}
        loading={isLoading}
        loadingText="Saving..."
        >
        Login
      </Button>
          </VStack>
    </Box>
  );
};
