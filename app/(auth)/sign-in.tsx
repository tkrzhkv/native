import React, { EventHandler, useState } from "react";
import { ScrollView, Image, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { FormType } from "@/app/(auth)/sign-up";
import { Link } from "expo-router";

export default function SignIn() {
  const [form, setForm] = useState<FormType>({
    email: "",
    password: "",
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
            Login in to Aora
          </Text>
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
            title="Sign in"
            containerStyles="mt-7"
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account yet ?
            </Text>
            <Link
              className="text-lg font-psemibold text-secondary"
              href="/sign-up"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
