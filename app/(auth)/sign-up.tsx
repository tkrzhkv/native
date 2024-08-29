import React, { EventHandler, useState } from "react";
import { ScrollView, Image, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

export type FormType = {
  email: string;
  password: string;
  username?: string;
};

export default function SignUp() {
  const [form, setForm] = useState<FormType>({
    email: "",
    password: "",
    username: "",
  });

  const isSubmitting = false;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[82vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-xl text-white font-psemibold mt-10">
            Sign up in to Aora
          </Text>
          <FormField
            placeholder="Username"
            value={form.username || ""}
            title="Username"
            handleChangeText={(text: string) =>
              setForm({ ...form, username: text })
            }
            otherStyles="mt-7"
          />
          <FormField
            placeholder="Email"
            value={form.email}
            title="Email"
            handleChangeText={(text: string) =>
              setForm({ ...form, email: text })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            placeholder="Password"
            value={form.password}
            title="Password"
            handleChangeText={(text: string) =>
              setForm({ ...form, password: text })
            }
            otherStyles="mt-7"
          />
          <CustomButton
            isLoading={isSubmitting}
            handlePress={() => {}}
            title="Sign up"
            containerStyles="mt-7"
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already ?
            </Text>
            <Link
              className="text-lg font-psemibold text-secondary"
              href="/sign-in"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
