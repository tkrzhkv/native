import "react-native-reanimated";
import { Text, View, Image, ImageSourcePropType } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "@/constants";
import { FC } from "react";

type TabIconType = {
  name: string;
  icon: ImageSourcePropType | undefined;
  color: string;
  focused: boolean;
};
const TabIcon: FC<TabIconType> = ({ name, icon, color, focused }) => {
  return (
    <View className="items-center justify-center gap-2 pt-4">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="h-6 w-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs `}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  const tabsItem = [
    {
      name: "Home",
      path: "home",
      icon: icons.home,
    },
    {
      name: "Bookmark",
      path: "bookmark",
      icon: icons.bookmark,
    },
    {
      name: "Create",
      path: "create",
      icon: icons.plus,
    },
    {
      name: "Profile",
      path: "profile",
      icon: icons.profile,
    },
  ];

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopColor: "#232533",
            borderTopWidth: 1,
            height: 84,
          },
        }}
      >
        {tabsItem.map((item) => (
          <Tabs.Screen
            name={item.path}
            options={{
              title: item.name,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={item.icon}
                  color={color}
                  name={item.name}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
}
