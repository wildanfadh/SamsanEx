import * as React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p="2" py="8" w="70%" mx="auto">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Selamat Datang
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Masuk untuk melanjutkan!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: "coolGray.800",
                fontSize: "xs",
                fontWeight: 500,
              }}
            >
              Username
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: "coolGray.800",
                fontSize: "xs",
                fontWeight: 500,
              }}
            >
              Password
            </FormControl.Label>
            <Input type="password" />
            <Link
              _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500" }}
              alignSelf="flex-end"
              mt="1"
            >
              Lupa Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" _text={{ color: "white" }}>
            Masuk
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              Saya pengguna baru.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Daftar
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
